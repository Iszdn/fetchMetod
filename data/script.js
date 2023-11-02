const baseUrl="http://localhost:3000/comments"

const show=document.getElementById('show')
async function fetchData() {
    try {
       const response=await axios.get(baseUrl)
      console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
show.addEventListener('click',async function () {
   await fetchData()
}
) 

const remove=document.getElementById('remove')
async function deletePost(commentsId) {
    try {
        await axios.delete(`${baseUrl}/${commentsId}`)
        fetchData()
    } catch (error) {
        console.log(error);
    }}
remove.addEventListener('click',async function(){
   await deletePost(5)
}
)

