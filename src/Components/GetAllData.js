import React, { useState } from "react"

export default function SearchData() {

    const [ query, setQuery ] = useState("")
    const [ products, setProducts ] = useState([])

    const fetchData = async (e) => {
        e.preventDefault()

       const apiKey = "4rAi11fx06MEwINk"
       //const url = `https://tarkov-market.com/api/v1/items/all&x-api-key=${apiKey}`
       //const url = `https://tarkov-market.com/api/v1/item?q=${query}&x-api-key=${apiKey}`
       const url = `https://tarkov-market.com/api/v1/items/all?sort=price&sort_direction=desc&x-api-key=4rAi11fx06MEwINk`
       ///api/v1/items/all

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setProducts(data)
            // console.log(data.foods[0].description)
           // console.log(data)
           // console.log(data.foods[0].foodNutrients.map(item => item.nutrientName + " " + item.value + item.unitName))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="form" onSubmit={fetchData}>
                <label className="label" htmlFor="query">Product name</label>
                <button className="button">Search</button>
            </form>
            <div className="products-list">
                {products.map(product =>
                    <>
                        <p>{product.name}</p>
                        <img src={product.icon} alt={product.name} style={{width: "100px", height: "100px"}}/>
                    </>)
                }
            </div>
        </>
    )
}

//{products.map(product => product.description)}

/*
<Product id={item.fdcId}>
                <Product.Name id={item.description}>{item.description}</Product.Name>
                <Portion>
                    <Portion.Name>Portion:</Portion.Name>
                    <Portion.Input
                        value={grams}
                        name="grams"
                        onChange={(e) => setGrams(e.target.value)}
                        placeholder="Type value in grams"
                    />
                    <Portion.Type>Grams</Portion.Type>
                </Portion>
                {item.foodNutrients.map(i => (
                filtersArray.map(f => (i.nutrientName.includes(f) === true)?
                <Product.Nutrient id={item.nutrientId}>{i.nutrientName}:
                    <Product.Value>{i.value * grams * 0.01}{i.unitName.toLowerCase()}</Product.Value>
                </Product.Nutrient> : ''
            )))}
            */