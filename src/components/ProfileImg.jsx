 
const ProfileImg =  () => {
    return (
      <div className="relative w-60 h-60 border-2 rounded-sm border-[#99d98c]   hover:left-2 hover:top-2  transition duration-500">
        <figure className="absolute bottom-3 -left-3 w-60 h-60 hover:bottom-5 hover:-left-5 duration-500">
          <img
            src="./profile-pic.png"
            alt=""
            className="object-cover w-full h-full rounded-sm"
          />
          <div className="w-full h-full top-0 left-0 bg-[#99d98c] opacity-60 -translate-y-full hover:opacity-0 transition-opacity duration-300 ease-in"></div>
        </figure>
      </div>
    );
};
 

export default ProfileImg;