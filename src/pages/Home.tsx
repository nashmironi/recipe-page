import foto from '/top-image.png'
const Home = () => {
  return (
    <div className=' lg:bg-background lg:flex lg:flex-col lg:justify-center lg:items-center'>
    <div className=' flex flex-col justify-center items-center  lg:w-[735px] lg:p-10 lg:bg-white2 lg:mt-[132px] lg:mb-[132px] lg:rounded-3xl'>
      <img src={foto} className=' lg:h-[300px] lg:rounded-xl' />
      <div className=' p-10 '>
      <div className=' mt-10 flex flex-col justify-center items-center'>
        <h1 className=' text-dark text-4xl font-normal text-left lg:text-5xl '>Simple Omelette Recipe</h1>
        <p className=' text-wengle_brown text-base font-normal leading-6 text-left mt-6'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
      <div className=' p-6 bg-snow rounded-xl flex flex-col items-start self-stretch mt-8'>
        <h4 className=' text-wine text-[20px] font-semibold mb-4'>
        Preparation time
        </h4>
        <ul className=' ml-6'>
          <li className=' text-wengle_brown text-4 font-normal list-disc'> <span className=' font-bold'>Total:</span> Approximately 10 minutes</li>
          <li className=' text-wengle_brown text-4 font-normal list-disc'> <span className=' font-bold'>Preparation:</span> 5 minutes</li>
          <li className=' text-wengle_brown text-4 font-normal list-disc'> <span className=' font-bold'>Cooking:</span> 5 minutes</li>
        </ul>
      </div >
        <div className=' mt-8 p-8'>
          <h3 className=' text-brown text-3xl font mb-6 '>Ingredients</h3>
          <ul>
           <li className=' text-wengle_brown text-4 font-normal list-disc'>2-3 large eggs</li>
           <li className=' text-wengle_brown text-4 font-normal list-disc'>Salt, to taste</li>
           <li className=' text-wengle_brown text-4 font-normal list-disc'>Pepper, to taste</li>
           <li className=' text-wengle_brown text-4 font-normal list-disc'>1 tablespoon of butter or oil</li>
           <li className=' text-wengle_brown text-4 font-normal list-disc'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <div className=' bg-white h-[1px]'></div>
        <div className=' mt-8'>
          <h3 className=' text-wine text-3xl font-normal mb-6'>Instructions</h3>
          <ol className=' list-decimal'>
            <li className=' text-wengle_brown text-4 font-normal'> <span className=' font-bold'>Beat the eggs:</span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li className=' text-wengle_brown text-4 font-normal'><span className=' font-bold'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li className=' text-wengle_brown text-4 font-normal'><span className=' font-bold'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li className=' text-wengle_brown text-4 font-normal'><span className=' font-bold'>Add fillings (optional): </span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li className=' text-wengle_brown text-4 font-normal'><span className=' font-bold'> Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li className=' text-wengle_brown text-4 font-normal'><span className=' font-bold'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>
        <div className=' bg-white h-[1px] my-8'></div>
        <div>
          <h3  className=' text-wine text-3xl font-normal'>Nutrition</h3>
          <p className=' my-6  text-wengle_brown text-base font-normal'>The table below shows nutritional values per serving without the additional fillings.</p>
          <div className=' flex flex-row  gap-4 justify-between'>
            <p className=' text-wengle_brown text-4 font-normal'>Calories</p>
            <p className=' text-wine text-base font-bold'>277kcal</p>
          </div>
          <div className=' bg-white h-[1px] my-3'></div>
          <div className=' flex flex-row  gap-4 justify-between'>
            <p className=' text-wengle_brown text-4 font-normal'>Carbs</p>
            <p className=' text-wine text-base font-bold'>0g</p>
          </div>
          <div className=' bg-white h-[1px]  my-3'></div>
          <div className=' flex flex-row  gap-4 justify-between'>
            <p className=' text-wengle_brown text-4 font-normal'>Protein</p>
            <p className=' text-wine text-base font-bold'>20g</p>
          </div>
          <div className=' bg-white h-[1px]  my-3'></div>
          <div className=' flex flex-row  gap-4 justify-between'>
            <p className=' text-wengle_brown text-4 font-normal'>Fat</p>
            <p className=' text-wine text-base font-bold'>22g</p>
          </div>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default Home;
