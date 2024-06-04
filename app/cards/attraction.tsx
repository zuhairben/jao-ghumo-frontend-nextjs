"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import attractions from '../img/attraction.jpeg';
import restaurants from '../img/restaurant.jpg';

interface AttractionCardProps {
    attraction: {
        name?: string;
        city?: string;
        state?: string;
        type?: string;
        country?: string;
        description?: string;
        phone?: string;
        address?: string;
        website?: string;
        position?: number;
        features?: string;
        timeOpen?: string;
        priceRange?: number;
        rating?: number;
        numberOfReviews?: number;
    };
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
    const imageSrc = attraction.type === 'restaurant' ? restaurants.src : attractions.src;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardMedia component='img' image={imageSrc} height="194" />
                <CardContent>
                    <Typography variant="body2" component="div">
                        {attraction.name || 'No name available'}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {attraction.type || 'Unknown type'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {attraction.city || 'Unknown City'}, {attraction.state || 'Unknown State'}, {attraction.country || 'Unknown Country'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {attraction.description || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone Number: {attraction.phone || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Address: {attraction.address || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {attraction.rating?.toString() || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Opening Time: {attraction.timeOpen || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price Range: {attraction.priceRange?.toString() || 'N/A'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        No. of Reviews: {attraction.numberOfReviews?.toString() || 'N/A'}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default AttractionCard;
