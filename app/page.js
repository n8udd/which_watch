"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import watches from "../watches.json";

const watchList = {
  Forerunner: {
    1: "Forerunner 965",
    2: "Forerunner 955 Solar",
    3: "Forerunner 955",
    4: "Forerunner 945",
    5: "Forerunner 745",
    6: "Forerunner 265",
    7: "Forerunner 265s",
    8: "Forerunner 255",
    9: "Forerunner 255s",
    10: "Forerunner 255 Music",
    11: "Forerunner 255s Music",
    12: "Forerunner 245",
    13: "Forerunner 245 Music",
    14: "Forerunner 165",
    15: "Forerunner 165 Music",
    16: "Forerunner 55",
    17: "Forerunner 45",
    18: "Forerunner 45s",
    19: "Forerunner 45 Plus",
    20: "Forerunner 55",
  },
  venu: {
    21: "Venu Sq 2 - Music Edition",
    22: "Venu Sq 2",
    23: "Venu 3s",
    24: "Venu 3",
    25: "Venu 2s",
    26: "Venu 2 Plus",
    27: "Venu 2",
    28: "Venu Sq Music Edition",
    29: "Venu Sq",
  },
  instinct: {
    30: "Instinct Crossover Solar - Tactical Edition",
    31: "Instinct Crossover Solar",
    32: "Instinct Crossover - Standard Edition",
    33: "Instinct 2X Solar - Tactical Edition",
    34: "Instinct 2X Solar",
    35: "Instinct 2s - Surf Edition",
    36: "Instinct 2s Solar Surf Edition",
    37: "Instinct 2s Solar",
    38: "Instinct 2s Camo Edition",
    39: "Instinct 2s",
    40: "Instinct 2 Surf Edition",
    41: "Instinct 2 Solar Tactical Edition",
    42: "Instinct 2 Solar Surf Edition",
    44: "Instinct 2 Solar",
    43: "Instinct 2 dezl Edition",
    45: "Instinct 2 Camo Edition",
    46: "Instinct 2",
  },
  epix: {
    47: "epix Pro (Gen 2) - Standard Edition | 51mm",
    48: "epix Pro (Gen 2) - Standard Edition | 47mm",
    49: "epix Pro (Gen 2) - Standard Edition | 42mm",
    50: "epix Pro (Gen 2) - Sapphire Edition | 51mm",
    51: "epix Pro (Gen 2) - Sapphire Edition | 47mm",
    52: "epix Pro (Gen 2) - Sapphire Edition | 42mm",
    53: "epix (Gen 2) - Standard Edition | 47mm",
    54: "epix (Gen 2) - Sapphire Edition | 47mm",
  },
  fenix: {
    55: "Fenix 7X - Solar Edition",
    56: "Fenix 7X - Sapphire Solar Edition",
    57: "Fenix 7X Pro - Solar Edition",
    58: "Fenix 7X Pro - Sapphire Solar Edition",
    59: "Fenix 7S - Standard Edition",
    60: "Fenix 7S - Solar Edition",
    61: "Fenix 7S - Sapphire Solar Edition",
    62: "Fenix 7S Pro - Solar Edition",
    63: "Fenix 7S Pro - Sapphire Solar Edition",
    64: "Fenix 7 - Standard Edition",
    65: "Fenix 7 - Solar Edition",
    66: "Fenix 7 - Sapphire Solar Edition",
    67: "Fenix 7 Pro - Solar Edition",
    68: "Fenix 7 Pro - Sapphire Solar Edition",
  },
  Vivo: {
    69: "Vivoactive 5",
    70: "Vivoactive 4s",
    71: "Vivoactive 4",
    72: "Vivosmart 5",
    73: "Vivomove Trend",
    74: "Vivomove Style",
    75: "Vivomove Luxe",
    76: "Vivomove Sport",
  },
  tactix: {
    77: "tactix 7 - Amoled Edition",
    78: "tactix 7 - Standard Edition",
    79: "tactix 7 - Pro Edition",
    80: "tactix 7 - Pro Ballistics Edition",
  },
  D2: {
    81: "D2 Mach 1 Pro",
    82: "D2 Mach 1",
    83: "D2 Air X10",
  },
  MARQ: {
    84: "MARQ Adventurer (Gen 2)",
    85: "MARQ Athlete (Gen 2)",
    86: "MARQ Athlete (Gen 2) - Carbon Edition",
    87: "MARQ Athlete (Gen 2) - Performance Edition",
    88: "MARQ Aviator (Gen 2)",
    89: "MARQ Captain (Gen 2)",
    90: "MARQ Commander (Gen 2) - Carbon Edition",
    91: "MARQ Golfer (Gen 2)",
    92: "MARQ Golfer (Gen 2) - Carbon Edition",
  },
  Quatix: {
    92: "Quatix 7 - Standard Edition",
    94: "Quatix 7X - Solar Edition",
    95: "Quatix 7 - Sapphire Edition",
    96: "Quatix 7 Pro",
  },
  Approach: {
    97: "Approach S42",
    98: "Approach S12",
    99: "Approach S62",
    100: "Approach S70 - 47mm",
    101: "Approach S70 - 42mm",
  },
  Swim: {
    102: "Swim 2",
  },
  Enduro: {
    103: "Enduro2",
  },
  Lily: {
    104: "Lily 2",
    105: "Lily 2 Classic",
    106: "Lily - Sport Edition",
    107: "Lily - Classic Edition",
  },
  Descent: {
    108: "Descent Mk2s",
    109: "Descent Mk2",
    110: "Descent Mk2i",
    111: "Descent G1",
    112: "Descent G1 Solar",
    113: "Descent G1 Solar - Ocean Edition",
    114: "Descent Mk3",
    115: "Descent Mk3i - 43mm",
    116: "Descent Mk3i - 51mm",
  },
};

const Home = () => {
  const series = Object.keys(watchList);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [selectedWatchIds, setSelectedWatchIds] = useState([]);
  const [viewFamily, setViewFamily] = useState(true);
  const [watch, setWatch] = useState({});
  const watchCount = selectedSeries.reduce(
    (acc, series) => acc + Object.keys(watchList[series]).length,
    0
  );

  useEffect(() => {
    setWatch({});
  }, [selectedSeries]);

  useEffect(() => {
    if (selectedWatchIds.length === watchCount - 1) {
      alert("Time to guess!");
    }
  }, [selectedWatchIds, watchCount, watch.model]);

  const selectSeries = (watchSeries) => {
    if (!selectedSeries.includes(watchSeries)) {
      setSelectedSeries([...selectedSeries, watchSeries]);
    } else {
      setSelectedSeries(selectedSeries.filter((item) => item !== watchSeries));
    }
  };

  const selectWatch = (watchId) => {
    if (!selectedWatchIds.includes(watchId)) {
      setSelectedWatchIds([...selectedWatchIds, watchId]);
    } else {
      setSelectedWatchIds(selectedWatchIds.filter((item) => item !== watchId));
    }
  };

  const randomWatch = () => {
    setSelectedWatchIds([]);
    setWatch({});
    const randomSeries =
      selectedSeries[Math.floor(Math.random() * selectedSeries.length)];
    const randomWatches = Object.keys(watchList[randomSeries]);
    const randomWatchId =
      randomWatches[Math.floor(Math.random() * randomWatches.length)];
    setWatch({
      series: randomSeries,
      watchId: randomWatchId,
      model: watchList[randomSeries][randomWatchId],
    });
  };

  const toggleViewFamily = () => {
    setViewFamily(!viewFamily);
  };

  const reset = () => {
    setSelectedSeries([]);
    setSelectedWatchIds([]);
    setWatch({});
  };

  return (
    <div className="flex font-mono min-h-screen flex-col items-center bg-slate-300">
      <header className="w-full items-center  text-sm">
        <div className="flex w-full justify-center border-b border-gray-300 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
          <div>
            <b>Which Watch</b> am I???
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            href="https://github.com/n8udd"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <span className="font-bold text-lg">@n8udd</span>
          </a>
        </div>
        <div className="flex justify-start width-full mt-8 ml-4">
          <button
            className="bg-red-600 text-white shadow-md px-4 py-2"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </header>

      <main className="p-4 mb-16 w-full">
        <div className="flex flex-col md:flex-row justify-start w-full">
          <section className="mt-16 w-4/5">
            <div>
              <h3 className="font-bold">
                1: Agree which series you wish to play with...
              </h3>
            </div>
            <div className="flex flex-wrap justify-start space-y-2 space-x-2 w-full mt-2">
              {series.map((watchSeries, index) => (
                <div
                  className={`flex bg-blue-400 shadow-md hover:bg-slate-200 p-4 text-center items-center justify-center cursor-pointer first:mt-2 first:ml-2 ${
                    selectedSeries.includes(watchSeries)
                      ? "bg-blue-400"
                      : "bg-white"
                  }`}
                  key={index}
                  onClick={() => selectSeries(watchSeries)}
                >
                  {watchSeries}
                </div>
              ))}
            </div>
            <div className="flex ml-2 space-x-4 mt-4">
              <div
                className={`flex bg-slate-800 text-green-500 hover:bg-slate-600  p-4 text-center items-center justify-center cursor-pointer min-w-48`}
                onClick={() => {
                  setSelectedSeries(series);
                }}
              >
                Select All
              </div>
              <div
                className={`flex bg-slate-800 text-red-500 hover:bg-slate-600  p-4 text-center items-center justify-center cursor-pointer min-w-48`}
                onClick={() => {
                  setSelectedSeries([]);
                }}
              >
                Clear All
              </div>
            </div>
          </section>

          {selectedSeries.length > 0 && (
            <section className="mt-16 md:ml-16">
              <div>
                <h3 className="font-bold">1b: Select your view type</h3>
              </div>
              <div className="flex space-x-4 mt-4">
                <div
                  className={`flex shadow-md hover:bg-slate-200 p-4 text-center items-center justify-center cursor-pointer ${
                    viewFamily ? "bg-white" : "bg-blue-400"
                  }`}
                  onClick={toggleViewFamily}
                >
                  Individual
                </div>
                <div
                  className={`flex shadow-md hover:bg-slate-200 p-4 text-center items-center justify-center cursor-pointer ${
                    !viewFamily ? "bg-white" : "bg-blue-400"
                  }`}
                  onClick={toggleViewFamily}
                >
                  Family
                </div>
              </div>
            </section>
          )}
        </div>

        {selectedSeries.length > 0 && (
          <>
            <div className="flex flex-row justify-start items-center space-x-8 w-full mt-16">
              <h3 className="font-bold">
                2: Each select a random watch that <u>your opponent</u> has to
                guess...
              </h3>
            </div>
            <section className="flex flex-row justify-start items-center space-x-8 w-full mt-4">
              <div className="">
                <div
                  className={`flex bg-blue-600 text-white shadow-md hover:bg-blue-400 p-4 text-center items-center justify-center cursor-pointer ml-2`}
                  onClick={() => randomWatch()}
                >
                  Randomise
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono">
                  {watch.series && <div>{watch.model}</div>}
                </div>
              </div>
            </section>
          </>
        )}

        {selectedSeries.length > 0 && (
          <div className="flex flex-col w-full mt-16">
            <h3 className="font-bold mb-4 ">
              3: Ask &ldquo;Guess Who&rdquo; style (yes/no) questions, and click
              on the watches to eliminate
            </h3>
            <h6 className="ml-4">
              eg: Is the screen amoled? Does it have a touchscreen? Is it a
              multi-sport watch?
            </h6>
            <h5 className="text-sm mt-4 ml-4">
              <span className="font-bold italic text-gray-500 bg-gray-200 p-2">
                (to make it really hard... you&apos;re not allowed to say any
                names within the brand, eg pro, solar, fenix etc)
              </span>
            </h5>
          </div>
        )}

        {viewFamily ? (
          <section className="mt-16 flex flex-col w-full justify-start space-x-4 space-y-4 -ml-2 ">
            {selectedSeries?.map((watchSeries, index) => (
              <div key={index} className="first:ml-2">
                <h3 className="font-bold text-xl">{watchSeries}:</h3>
                <div className="flex flex-wrap space-x-4 space-y-4 -ml-2 ">
                  {Object.keys(watchList[watchSeries]).map((watchId, index) => (
                    <button
                      key={index}
                      className={`first:ml-4 first:mt-4 bg-white shadow-md p-4  ${
                        selectedWatchIds.includes(watchId)
                          ? "text-slate-300"
                          : ""
                      }
                      ${
                        !watch?.watchId
                          ? "cursor-not-allowed"
                          : "cursor-pointer hover:bg-slate-200"
                      }
                      `}
                      title={
                        watch?.watchId ? watchId : "Please randomise a watch"
                      }
                      onClick={() => {
                        !watch?.watchId
                          ? alert("Please randomise a watch")
                          : selectWatch(watchId);
                      }}
                    >
                      {watchList[watchSeries][watchId]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-16 flex flex-wrap justify-start w-full space-x-4 space-y-4 -ml-2 ">
            {selectedSeries?.map((watchSeries, index) =>
              Object.keys(watchList[watchSeries]).map((watchId, index) => (
                <button
                  key={index}
                  className={`first:ml-4 first:mt-4 bg-white shadow-md p-4   ${
                    selectedWatchIds.includes(watchId) ? "text-slate-300" : ""
                  }
                  ${
                    !watch?.watchId
                      ? "cursor-not-allowed"
                      : "cursor-pointer hover:bg-slate-200"
                  }`}
                  title={watch?.watchId ? watchId : "Please randomise a watch"}
                  onClick={() => {
                    !watch?.watchId
                      ? alert("Please randomise a watch")
                      : selectWatch(watchId);
                  }}
                >
                  {watchList[watchSeries][watchId]}
                </button>
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
