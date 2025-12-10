import { useNavigate } from 'react-router-dom'

import Preview from './Preview'
import { WIPToggle } from './WIPToggle'


const Feed = ({ posts, wip, showWIP, setShowWIP }) => {
  const navigate = useNavigate()
  const postToPreviewComponent = postToPreviewComponentWithNavigate(navigate)

  return (
    <>
      {!!wip.length && setShowWIP && (
        <WIPToggle
          toggleShowWIP={() => setShowWIP(!showWIP)}
          showWIP={showWIP}
        />
      )}
      {showWIP && wip.map(postToPreviewComponent)}
      {posts.map(postToPreviewComponent)}
    </>
  )
}

const postToPreviewComponentWithNavigate = (navigate) => (post) =>
(
  <Preview
    {...post}
    onClick={() => navigate(`posts/${post.id}`)}
    key={post.id}
  />
)

export default Feed 