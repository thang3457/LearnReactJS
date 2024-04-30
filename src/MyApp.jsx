import { useState, useEffect } from "react";

const lesons = [
    {
        id: 1,
        name: 'reactjs là gì ',
        commet: []
    },
    {
        id: 2,
        name: 'Spa/Mpa là gì ',
        commet: []

    },
    {
        id: 3,
        name: 'Arrow là gì ',
        commet: []

    },
]
//Tạo App đăng ảnh và có thể bình luận
function MyApp () {
        const  [avatar, setAvatar] = useState()
        const [lesonsID,setLesonsID] = useState(1)
        const [commet, setCommets] = useState('')

        useEffect(() => {
            const handleCommet = ({ detail}) => {
                console.log(detail)
            }

            window.addEventListener(`lesson-${lesonsID}`, handleCommet)

            return () => {
                window.removeEventListener(`lesson-${lesonsID}`, handleCommet)
            }
        },[lesonsID])


        useEffect (() => {

            return () => {
             avatar &&   URL.revokeObjectURL(avatar.preview)
            }
        },[avatar])
        const handlePreviewAvatar = (e) => {
            const file = e.target.files[0]
            console.log(file)
            file.preview = URL.createObjectURL(file)
            setAvatar(file)
            e.target.value= null
            
        }

        const handleLesson = (e, id) => {
         setLesonsID(id)
        }
return (
   <div> 
    

   <input 
   type="file" 
   
    onChange={handlePreviewAvatar}
   />
   {
    avatar && 
   <img src={avatar.preview} alt="avater" width='50%' />
   }

<ul>
    {
        lesons.map(lesson => (
            <li
                key={lesson.id}
                style={{
                    color: lesonsID === lesson.id ? 
                        'red':
                        '#333'
                        
                }}
                onClick={(e) => handleLesson(e, lesson.id)}
            >{lesson.name}
            {lesson.id === lesonsID && 
            <input type="text"  
                value={commet}
                onChange={(e) => setCommets(e.target.value)}
            />
            }
            {lesson.id === lesonsID && 
            <p>{lesson.commet.push(commet)}</p> 
}   
            {console.log(lesson.commet)}

        
            </li>
        ))
    }
</ul>

   </div>

)


}

export default MyApp