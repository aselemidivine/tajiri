

const ExploreCardWithButton = ({ text, img}) => {
    return (
      <div className="flex justify-center py-6  shadow-lg border-[1px] rounded-lg hover:scale-110  transition-all duration-300  hover:text-white ex-card">
        <div className="text-center">
          <div className="flex justify-center mb-2  hover:text-white">
           {img}
          </div>
  
          <button className="mt-2 px-4 py-2 rounded-md">
            {text}
          </button>
        </div>
      </div>
    );
  };

  export default ExploreCardWithButton