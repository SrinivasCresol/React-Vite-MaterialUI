import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";

const sampleData = [
  { title: "Card 1", content: "This is the content for Card 1" },
  { title: "Card 2", content: "This is the content for Card 2" },
  { title: "Card 3", content: "This is the content for Card 3" },
];

export default function Cards() {
  return (
    <Grid container spacing={2}>
      {sampleData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={3}>
            <CardHeader title={item.title} />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
