import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { blogs } from '../__mocks__/blogs';
import { BlogListToolbar } from '../components/blog/blog-list-toolbar';
import { BlogCard } from '../components/blog/blog-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Blogs = () => (
  <>
    <Head>
      <title>
        Blogs | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        
        <BlogListToolbar />
       
        
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {blogs.map((blog) => (
              <Grid
                item
                key={blog.id}
                lg={6}
                md={6}
                xs={12}
              >
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Blogs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Blogs;
