(function () {
  "use strict";

  var SELECTOR = ".post-content img, .gallery-item img";
  var overlay = null;
  var overlayImage = null;
  var closeButton = null;
  var lastFocused = null;

  function buildOverlay() {
    overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-label", "Fullscreen image viewer");

    overlayImage = document.createElement("img");
    overlayImage.className = "lightbox-image";
    overlayImage.alt = "";

    closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "lightbox-close";
    closeButton.setAttribute("aria-label", "Close fullscreen image");
    closeButton.innerHTML = "&times;";

    overlay.appendChild(overlayImage);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        close();
      }
    });

    closeButton.addEventListener("click", close);
  }

  function open(image) {
    if (!overlay) {
      buildOverlay();
    }

    lastFocused = document.activeElement;
    overlayImage.src = image.currentSrc || image.src;
    overlayImage.alt = image.alt || "";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function close() {
    if (!overlay) {
      return;
    }

    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }

    lastFocused = null;
  }

  function isOpen() {
    return !!overlay && overlay.classList.contains("is-open");
  }

  function makeZoomable(image) {
    if (image.dataset.zoomable === "true") {
      return;
    }

    image.dataset.zoomable = "true";
    image.classList.add("zoomable");
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute(
      "aria-label",
      image.alt ? "View fullscreen: " + image.alt : "View image fullscreen"
    );
  }

  function setupImages(root) {
    var images = (root || document).querySelectorAll(SELECTOR);
    for (var i = 0; i < images.length; i++) {
      makeZoomable(images[i]);
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || typeof target.closest !== "function") {
      return;
    }

    var image = target.closest(SELECTOR);
    if (image) {
      event.preventDefault();
      open(image);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      close();
      return;
    }

    if (
      (event.key === "Enter" || event.key === " " || event.key === "Spacebar") &&
      !isOpen()
    ) {
      var target = event.target;
      if (target && typeof target.closest === "function") {
        var image = target.closest(SELECTOR);
        if (image) {
          event.preventDefault();
          open(image);
        }
      }
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setupImages(document);
    });
  } else {
    setupImages(document);
  }
})();
