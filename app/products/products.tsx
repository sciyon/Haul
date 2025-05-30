import Grid from '@mui/material/Grid';
import getProducts from "./actions/get-products"
import ProductsGrid from './products-grid';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';
import authenticated from '../auth/actions/authenticated';

export default async function Products() {
  const isAuthenticated = await authenticated();
  
  if (!isAuthenticated) {
    return (
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '85vh' }}>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Please log in or sign up to view products
          </Typography>
          <div className="flex gap-2">

            <Button 
              component={Link} 
              href="/auth/login" 
              variant="contained"
            >
              Login
            </Button>
            <Button 
              component={Link} 
              href="/auth/signup" 
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }

  const products = await getProducts();
  return <ProductsGrid products={products} />;
}