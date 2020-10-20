/*
Author: Uday Korlimarla
Copyright (c) Inspektre Pty Ltd
*/
import { getJsonCveFeeds } from './downloadFeeds';
import { runCveMutations } from './transforms';



// Download CVE Feeds
// getJsonCveFeeds();

// CVE Mutations
console.log("Initializgin CVE Seed Mutations");
runCveMutations();

// const iterCves = async () => {
//     let currentYear;
//     const maxYear = new Date().getFullYear();
    
//     for (currentYear = 2002; currentYear <= maxYear; currentYear++) {
//         const complete = await runCveMutations(currentYear);
//         console.log(complete);
//     }
// };

// iterCves();