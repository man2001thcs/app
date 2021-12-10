import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DashboardLayout } from '../components/dashboard-layout';
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
import { Image as ImageIcon } from '../icons/image';
import { Video as VideoIcon } from '../icons/video_upload';
import { File as FileIcon } from '../icons/file_upload';


const BLog_input = () => {
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



    onSubmit: () => {

        router.push('/blog');


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
          alignItems: 'top',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="lr">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Blog
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 2 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Blog mới
              </Typography>

            </Box>
            <TextField sx={{maxWidth: 650,
            ml: 3, mt: -1
            }}

              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Here"
              margin="normal"
              name="firstName"
              multiline = 'true'

              minRows = {10}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />


            <Box

            container justify="right"

            sx={{ float: 'left', ml: 3 }}
            >

          <Button
          sx={{ mr: 1 }}

          startIcon={(<ImageIcon fontSize="small" />)}
            >
          Ảnh
          </Button>

          <Button
          sx={{ mr: 1 }}

          startIcon={(<VideoIcon fontSize="small" />)}
        >
          Video
        </Button>
        <Button
          sx={{ mr: 1 }}

          startIcon={(<FileIcon fontSize="small" />)}
        >
          File khác
        </Button>
        <Button sx={{ mr: 1, width: 300, float: 'right' }}
                justify="right"
                color="primary"
                enabled={formik.isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Đăng
        </Button>

      </Box>


            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}

          </form>
        </Container>
      </Box>
    </>
  );
};

BLog_input.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default BLog_input;
