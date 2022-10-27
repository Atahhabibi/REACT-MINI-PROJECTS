const paginate = (follower) => {

    const pages=9;
    const itemPerpage=Math.ceil(follower.length/9)

    const newFollower=Array.from({length:pages},(_,index)=>{
        const start=index*itemPerpage;
        return follower.slice(start,start+itemPerpage);
    })


    return newFollower;


}








export default paginate
