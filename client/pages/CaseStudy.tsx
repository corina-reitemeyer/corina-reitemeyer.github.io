import { useEffect } from 'react'

const CaseStudy = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/caseStudyData.json')
      .then((response) => response.json)
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div></div>
        <h2>Project Title </h2>
        <p></p>
      </div>
    </>
  )
}

export default CaseStudy
