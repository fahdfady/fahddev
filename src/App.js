import LoadingScreen from './components/loading'
import Navbar from './components/navbar';
import './style/App.css';
import script from './script.js';
// import './js/script.js'
import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch';
import Information from './components/information';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Cursor from './components/cursor';


function App() {

  const { data: information, isPending, error } = useFetch("information");
  const { data: skills } = useFetch("skills");
  const { data: projects } = useFetch("projects");
  const { data: socials } = useFetch("socials");


  return (
    <div className="App">

      {/* <Cursor /> */}

      <div className="page-container">

        <div className="not-footer">

          <Navbar />
          <main className="page-body">

            { error && <div className="error">{ error }</div> }

            { isPending &&
              <div className="loading">
                <LoadingScreen />
              </div>
            }

            { information && <Information information={ information } /> }

            { skills && <Skills skills={ skills } /> }

            { projects && <Projects projects={ projects } /> }

          </main>

        </div>

        { socials && <Footer socials={ socials } /> }

      </div >
<script src='./script.js'></script>
    </div >
  )
  
}

export default App;