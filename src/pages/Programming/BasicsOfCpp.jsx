import React from 'react';
import Datatype from './Basics/Datatype';
import Condition from './Basics/Condition';
import Operator from './Basics/Operator';
import Loop from './Basics/Loop';
import Array from './Basics/Array';
import Dequeue from './Basics/Dequeue';
import Heap from './Basics/Heap';
import Map from './Basics/Map';
import Pair from './Basics/Pair';
import PriorityQueue from './Basics/PriorityQueue';
import Queue from './Basics/Queue';
import Set from './Basics/Set';
import Stack from './Basics/Stack';
import Touple from './Basics/Touple';

const BasicsOfCpp = () => {
    return (
        <div>
           <Datatype /> 
           <Condition />
           <Operator />
           <Loop />
           <Array />
           <Dequeue />
           <Heap />
           <Map />
           <Pair />
           <PriorityQueue />
           <Queue />
           <Set />
           <Stack />
           <Touple />
        </div>
    );
};

export default BasicsOfCpp;