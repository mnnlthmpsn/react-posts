import { memo } from "react"
import { Link } from "react-router-dom"

export const BG = {
    img_1: 'https://images.unsplash.com/photo-1494319921810-2fab6cce50a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_2: 'https://images.unsplash.com/photo-1516825513084-7a3397fcd108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZsYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_3: 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZsYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_4: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZsYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_5: 'https://media.istockphoto.com/photos/contrast-concept-picture-id1296506522?b=1&k=20&m=1296506522&s=170667a&w=0&h=3_vyXHp4j8QvrjmdiaCm1ijRNdblJ3_Hi_jnWxRdlSg=',
    img_6: 'https://media.istockphoto.com/photos/different-sphere-other-side-of-border-picture-id1297426893?b=1&k=20&m=1297426893&s=170667a&w=0&h=GCxvnUyMRq62M4KjvqcgNPwVsYHHq1jvlZ157-IRYf4=',
    img_7: 'https://images.unsplash.com/photo-1552083974-186346191183?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_8: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_9: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    img_10: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
}

export const randomImg = () => {
    var keys = Object.keys(BG)
    return BG[keys[ keys.length * Math.random() << 0]]
}

const PostWidget = ({ post, index }) => {
    return (
        <div className="space-y-2">
            
            <div className="rounded">
                <Link to={`/${index}`}>
                <img src={randomImg()} className="img" loading='lazy' alt='#' />
                </Link>
            </div>

            <p className="text-xs font-bold text-gray-500">February 28, 2021</p>

            <p className="font-bold text-gray-600 break-words">{post.title}</p>
        </div>
    )
}

export default memo(PostWidget)