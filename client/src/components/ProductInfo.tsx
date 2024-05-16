import React from 'react';
import {Card, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import {Product} from '../types';

interface ProductInfoProps {
    product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {
    return (
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    height="194"
                    image={product.image}
                    alt="Paella dish"
                />
                <Typography variant="h5">{product.name}</Typography>
                <Typography color="textSecondary">{product.description}</Typography>
                <div style={{marginTop: 10}}>
                    {product.tags.map((tag, index) => (
                        <Chip key={index} label={tag} style={{marginRight: 5}}/>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductInfo;
