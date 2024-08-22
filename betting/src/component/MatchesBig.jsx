import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";

const MatchesBig = () => {
  return (
    <div   style={{ maxHeight: "381px", overflowY: "auto" }}>
           <div className="grid grid-cols-12 text-center border mt-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-6 p-3 bg-neutral-700">
          Upcoming Matches
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6 p-3 bg-yellow-300">
          Top leagues
        </div>
        
      </div>
      <div className="grid grid-cols-12 text-center  bg-neutral-700">
      <div className="col-span-12 md:col-span-4 xl:col-span-5">
          Match Result
        </div>
        <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r">
          Double chance
        </div>
        <div className="col-span-12 md:col-span-4 xl:col-span-2">
          Both Score
        </div>
      </div>
      <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    <div
      className="grid grid-cols-12 bg-neutral-700"
      >
      <div className="col-span-12 md:col-span-4 xl:col-span-5 p-2">
        <p className="text-neutral-400">Germany - DFB Pokal</p>
        <p className="text-white mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              X <span className="float-end text-yellow-300">2</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2 <span className="float-end text-yellow-300">1.88</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-5 border-l border-r p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <p className="text-neutral-700 mb-2">
          Erzgebirge Aue V Borussia Monchengladbach
        </p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              1X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              12 <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-4">
            <button className="pl-5 pr-5 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              2X <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-2 p-2">
        <p className="text-neutral-700">Germany - DFB Pokal</p>
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              Yes <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <button className="pl-2 pr-2 text-start text-white hover:bg-yellow-300 hover:shadow-yellow-500 bg-neutral-800 w-full border-l border-r">
              No <span className="float-end text-yellow-300">2.9</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    <hr />
    </div>
   
  );
};

export default MatchesBig;
