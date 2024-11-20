import React from "react";
import CP from "../assets/CP.png";
import CP3 from "../assets/CP3.png";

// Updated Data Array with distinct images for food, festival, and place
const topPicksData = [
  { 
    id: 1, 
    food: { name: "Prasad", image: 'https://images.healthshots.com/healthshots/en/uploads/2021/11/08113807/thekua.jpg' }, 
    festival: { name: "Chhath Puja", image: 'https://tse4.mm.bing.net/th?id=OIP.eriZXPxSIuvlv4jsAAPD5QHaE_&pid=Api&P=0&h=180' }, 
    place: { name: "Bihar", image: 'https://www.infoandopinion.com/wp-content/uploads/2019/11/Bihar-Map-District.png' } 
  },
  { 
    id: 2, 
    food: { name: "Litti Chokha", image: 'https://1.bp.blogspot.com/-EcLQ6rys5g4/WIb0Gkx9RcI/AAAAAAAAAAQ/iw1o3Ptc6XcI_n9CJDazn08KKQBVprJQgCLcB/s1600/dal-batti.jpg' }, 
    festival: { name: "", image: '' }, 
    place: { name: "Patna", image: 'https://travelplaceindia.com/wp-content/uploads/2019/11/1440px-Patna_-_GolGhar3.jpg' } 
  },
  { 
    id: 3, 
    food: { name: "Tunday Kebab", image: 'https://bitemeup.com/wp-content/uploads/2019/03/mutton-tunday-1024x683.jpg?ezimgfmt=rs:760x507/rscb2/ng:webp/ngcb2' }, 
    festival: { name: "", image: '' }, 
    place: { name: "Lucknow", image: 'https://s4.scoopwhoop.com/anj/sw/43936c86-b474-4f66-9604-a5db97ad5b7c.jpg' } 
  },
];

const TopPicks = () => {
  return (
    <div className="text-saffron-dark text-center font-bold text-xl mt-20 mb-20 px-5">
      <p className="mb-5">Top Picks</p>

      <div className="border-2 border-gray-300 rounded-lg shadow-lg p-5 w-full md:w-2/3 mx-auto">
        <div className="flex flex-col gap-4">
          {/* Dynamically Render Each Item by ID */}
          {topPicksData.map((item, index) => {
            // Get a count of non-empty items in the row (food, festival, and place)
            const availableItems = [item.food, item.festival, item.place].filter(
              (i) => i.name
            ).length;

            return (
              <div key={item.id}>
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    availableItems === 2 ? "justify-center" : "justify-between"
                  } gap-4 md:gap-8 mb-4`}
                >
                  {/* Render Food with image */}
                  {item.food.name && (
                    <div className="flex flex-col items-center">
                      <img
                        src={item.food.image}
                        alt={item.food.name}
                        className="w-56 h-56 object-cover rounded-md transition-transform transform hover:scale-105 hover:brightness-110"
                      />
                      <p className="text-lg">{item.food.name}</p>
                    </div>
                  )}

                  {/* Render Festival with image */}
                  {item.festival.name && (
                    <div className="flex flex-col items-center">
                      <img
                        src={item.festival.image}
                        alt={item.festival.name}
                        className="w-56 h-56 object-cover rounded-md transition-transform transform hover:scale-105 hover:brightness-110"
                      />
                      <p className="text-lg">{item.festival.name}</p>
                    </div>
                  )}

                  {/* Render Place with image */}
                  {item.place.name && (
                    <div className="flex flex-col items-center">
                      <img
                        src={item.place.image}
                        alt={item.place.name}
                        className="w-56 h-56 object-cover rounded-md transition-transform transform hover:scale-105 hover:brightness-110"
                      />
                      <p className="text-lg">{item.place.name}</p>
                    </div>
                  )}
                </div>

                {/* Render Horizontal Line after each ID's content */}
                {index < topPicksData.length - 1 && (
                  <hr className="border-t-2 border-gray-300 mt-4" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
