import React from 'react'

const page = () => {
  return (
    <div className='page-div'>
        <h1>Modern (Java) Relationships</h1>
        <p>TLDR: Here's the code you're looking for</p>
        {/* JsonManagedReference */}
        <img src="" alt="One to many example" />
        {/* JsonBackReference */}
        {/* JsonManagedReference */}
        <img src="" alt="Many to one example" />
        {/* JsonBackReference */}
        <p>Okay, now we can talk about the why!</p>
        <p>Bidirectional relationships in Java and Object Oriented Programming are great. 
            Instead of having to pull all the data in a huge SQL query, you can simply have this piece of code, and it will pull all the information for 
            But what if we don't want all that info? More on that later</p>
        <p>In this case, it makes sense for us to pull all the patients currently assigned to a nurse in a very rudimentary and simple system like this. Further down the road, it would make more sense to go day by day, but I'm not going to give all my amazing secrets away in the very first blog post for this project</p>
        <p>So we have a nurse_id column in the patient table, and when loading a nurse, in almost all cases, we want the patients assigned to a nurse. But now, when we pull a nurse, we'll pull the patient. But the bidirectional relationship means that when we'll pull the patient, we'll pull the information for the nurse that they're assigned to. So we call the nurse, that calls the patient. In case you're not seeing the fatal pattern here, when we call the patient, we'll call the nurse object assigned to them. Now, there's a recursive  loop. This is what's referred to as the Jackson JSON infinite recursion problem.</p>
        <p>We need to break the loop on the first time that the nurse object is called again. This can be done through labeling the One in the One to Many with @JsonManagedReference. This </p>

        <p>When I was first using Java Spring Boot, I ran into an issue with getting model relations' from the database. 
            The first was somehow not obvious. The recursive loop (also refered to as Jackson infinite recursion problem) that came with trying to display all the information found in a bidirecitonal relationship. 
            At first I couldn't figure out that the call was coming from inside the house (as in, I had messed up). Of course, if you set up a relation for an object, in this case, I wanted to get all the nurses  in our system, as well as all the patients under their care. Given the infinite loop of relations loading one another, I had to cut the cycle off somewhere. After stumbling onto a video about data transfer objects (DTOs), and not knowing exactly what was going on, I came up with a few, very rudimentary, models that would get me all the information I wanted from the backend. When I revisited the code a few months later, I found that when I was trying to get 
            
            
            <br />@JsonManagedReference. @JsonBackReference   
        </p>
    </div>
  )
}

export default page