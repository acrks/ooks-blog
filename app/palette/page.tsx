import React from 'react'

const page = () => {
  return (
    <div className='page-div'>
        <h1>Modern (Java) Relationships</h1>
        <p>TLDR: Here's the code you're looking for</p>
        <div style="display: flex; flex-direction: column">
        <div>
        <p>Import statement</p>
        <img src="https://storage.googleapis.com/ooks-blog-assets/blog-images/modern-java-relationships/import-statement" alt="Import statement" />
        {/* JsonManagedReference */}
        </div>
        <div>
        <p>Json Managed Reference (One to Many)</p>
        <img src="https://storage.googleapis.com/ooks-blog-assets/blog-images/modern-java-relationships/one-to-many" alt="One to many example" />
        {/* JsonBackReference */}
        </div>
        <div>
        <p>Json Managed Reference (Many to One)</p>
        <img src="https://storage.googleapis.com/ooks-blog-assets/blog-images/modern-java-relationships/many-to-one" alt="Many to one example" />
        </div>
        {/* JsonBackReference */}
        </div>
        <p>Okay, now we can talk about the why!</p>
        <p>Bidirectional relationships in Java and Object Oriented Programming are great. 
            Instead of having to pull all the data in a huge SQL query, you can simply have this piece of code, and it will pull all the information for an object.
            <br/>
            It's incredibly effective for very obvious relations, like in an early version of ORCA, with every patient having a nurse assigned to them and saved in the database.
        </p>
        <p>For now, we want to grab all the patient data to display with the nurse data, for both general display and also switching patients between nurses. <br/>Not to worry all my casual hospital admin enthusiasts. Further down the road, we migrated to a day by day system, but I'm not going to give all my amazing secrets away in the very first blog post for this project</p>
        <p>So we have a nurse_id foreign key column in the patient table, and when loading a nurse, in almost all cases, we want the patients assigned to a nurse. So, we shoot off the request to pull the nurse data. When that loads, our code will pull all the patient data. We need to make this happen by creating a Patient object and populating it with the Patient's data.<br/>But the way our bidirectional relationship is set up in the model means that when we pull the patient, we'll pull the information for the nurse that they're assigned to. Hooray! We've created a recursive loop. Begin mashing the "cancel request" button in Postman. If you're looking for a name for this for therapy, it's what's referred to as the Jackson JSON infinite recursion problem.</p>
        <p>We need to break the loop before nurse object is called again. This can be done through annotating the member variable in the One to Many with @JsonManagedReference. This is the "forward" part of the relationship, and serializes the associated property. If it's your first time looking for a fix, and let's be honest, why else would you need to read a blog post like this, serialization refers to the process of translating a data structure or object state into a format that can be stored</p>
        <p>Now the first direction is set up. But how do we handle the relationship in the opposite direction, the Many (in this case, ArrayList) in the One to Many relationship. So we have many patients to one nurse, so we'll annotate the member variable of the patient ArrayList with @JsonBackReference. It's in the name, but the back part (the inverse to forward in this case) means it'll be omitted from serialization.</p>
        <p>We did it! We've stopped the program from crashing when making a simple call to get some data. Unfortunately, we now get every single piece of data that's under the member variable umbrella. This includes, annoyingly, a field for the nurse with all the patients that we pull with our nurse object. Obviously, redundant! This is where DTOs come in.</p>
        <p>Data Transfer Objects (DTOS) are how we cut down on unnecessary information from our database pulls and display only the information relevant to a certain api call. It's essentially another model. Before you say, "Creating two objects for one API request! There has to be a better way!"</p>
        <p>Well not only am I creating one DTO for standard transfering, I am also creating a plain <i>insert model name</i> here.</p>
        <p> My thinking is this: For this kind of dataset, with an incredible amount of sensitive information, controlling the information that may be sent to the frontend is essential, and the ability to change, or more importantly, limit what information is available far outweighs any risk of latency. Also, given the workload a nurse can be given, that being 10 patients max, the information can never be scaled to a point that would crash the system. At least, not in this iteration.</p>
    </div>
  )
}

export default page