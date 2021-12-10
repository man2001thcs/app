import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography, 
  
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image as ImageIcon } from '../../icons/google';
import { Download as DownloadIcon } from '../../icons/download';
const App = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repassword: '',
      policy: false
    },
    validationSchema: Yup.object({
     
      firstName: Yup
        .string()
        .max(400000)
        .required(
          'Cần điền nội dung!!')
      
        
    }),

  

    onSubmit: (resetForm) => {
      if(formik.values.password==formik.values.repassword){
        router.push('/login');
      }else{
        alert("Mật khẩu không khớp!");
      formik.values.repassword = '';
      resetForm(); 
      } 
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Màn hình chính
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Blog mới
              </Typography>
             
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Here"
              margin="normal"
              name="firstName"
              multiline = 'true'
              minRows = {7}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <Box sx={{ m: 1 }}>
             <Button
          
          sx={{ mr: 1 }}
          startIcon={(<ImageIcon fontSize="small" />)}
            >
          Ảnh
          </Button>
          <Button
         
          sx={{ mr: 1 }}
        >
          Video
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          File khác
        </Button>
      </Box>
            
        
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}

            

          <Box sx={{ py: 2 }}>
              
              <Button
                color="primary"
                enabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Đăng
              </Button>
            </Box>
            
            
          </form>
        </Container>
      </Box>
    </>
  );
};

export default App;
