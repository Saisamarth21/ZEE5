import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const plans = [
  { title: "Basic Plan", price: "₹99/month", details: "Access to standard content with ads." },
  { title: "Standard Plan", price: "₹199/month", details: "HD content, no ads, and offline downloads." },
  { title: "Premium Plan", price: "₹299/month", details: "4K content, multiple devices." },
];

const Plans = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4, px: 2 }}>
      <Typography variant="h4" sx={{ color: "#fff", mb: 3, fontWeight: "bold", textAlign: "center" }}>
        Plans
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: "#1A0033",
                color: "#fff",
                textAlign: "center",
                p: 3,
                boxShadow: 3,
                border: "2px solid #fff",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
                  {plan.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mb: 2 }}>
                  {plan.details}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
                  {plan.price}
                </Typography>
              </CardContent>
              <Button variant="contained" sx={{ mt: 2, bgcolor: "purple", "&:hover": { bgcolor: "darkviolet" } }}>
                Choose Plan
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;
