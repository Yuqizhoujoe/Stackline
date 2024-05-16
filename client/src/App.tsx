import React, {useEffect, useState} from "react";
import axios from "./api/axios";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import {Container, Grid} from "@mui/material";
import {Product, Sale} from "./types";

const App: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("/sales");
                const data = result.data[0];
                setProduct({
                    name: data.title,
                    description: data.subtitle,
                    tags: data.tags,
                    image: data.image,
                });
                setSales(data.sales);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            <Container className="app-container" sx={{marginTop: "2rem"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        {product && <ProductInfo product={product}/>}
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <SalesChart data={sales}/>
                    </Grid>
                    <Grid item xs={12}>
                        <SalesTable data={sales}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default App;
