import styles from "./Dashboard.module.css"
import { Link } from "react-router-dom"

//hooks
import {useAuthValue}from "../../context/AuthContext"
import {useFetchDocuments} from "../../hooks/useFetchDocuments"

const Dashboard = () => {

  const {user} = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocuments("posts", null, uid)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Gerencie os seus posts</p>
        {posts == null && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts :/</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>)
        }
        {posts && posts.map((post) => (
          <h3>{post.title}</h3>
        ))}
    </div>
  )
}

export default Dashboard