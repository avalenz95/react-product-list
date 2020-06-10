import React from 'react'
import d from './data.json'


function Data() {
    let data = d.map( (item) => {
        return item.category
    })

    const categorieSet = new Set(data)
    const categorieUnique = Array.from(categorieSet)

    //Objeckts.keys(dataUnqie)

    // Reduce categories with counts
    const categoriesWithCounts = data.reduce((obj, cat) => {
        if (obj[cat]) {
            obj[cat] += 1
        } else {
            obj[cat] = 1
        }
        return obj
    }, {})

    const categoriesWithCountsArray = data.reduce((acc, cat) => {
        if (acc[cat]) {
            acc[cat] += 1
        } else {
            acc[cat] = 1
        }
        return acc

    }, [])

    console.log(categoriesWithCountsArray)
    console.log(categoriesWithCounts)
    
    return(
        <div>
        
           {categorieUnique}   
        </div>
    )
}

export default Data

