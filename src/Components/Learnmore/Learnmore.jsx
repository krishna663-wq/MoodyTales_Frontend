
const Learnmore = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1665329676624-d6be49542f52?q=80&w=2889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
      <p className="text-lg text-gray-300 mb-8">The platform features a user-friendly interface that makes it easy for users to select or indicate their mood through simple interactions. 
        <br/>By leveraging advanced algorithms and mood detection technologies, 
   Moodytales can analyze user preferences and behaviors<br/> to continually refine and enhance its recommendations. 
   This ensures a highly personalized and engaging experience for each user. <br/>Additionally, Moodytales fosters a sense of community by allowing users to share their mood and favorite content, creating a space where people can<br/> connect over shared experiences.
    The platform is regularly updated with fresh content, keeping the recommendations relevant and exciting. <br/>Partnerships with authors, artists, and content creators also enable Moodytales to offer exclusive content, making it a unique and compelling destination<br/>
    for users seeking mood-based content discovery. Whether you are looking to match your current vibe or change your mood, Moodytales provides <br/> a tailored, immersive experience that helps you find the perfect content for any emotional state.</p>

    </div>
  </div>
  )
}

export default Learnmore
