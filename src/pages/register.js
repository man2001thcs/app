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
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      email: Yup
        .string()
        .email(
          'Phải là email hợp lệ!')
        .max(255)
        .required(
          'Cần điền Email!'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'Cần điền họ!'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Cần điền tên!'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Cần điền mật khẩu!'),
      repassword: Yup
      .string()
      .max(255)
      .required('Cần điền lại mật khẩu!'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'Cần chấp nhận điều khoản!'
        )
    }),

  

    onSubmit: (resetForm) => {
      if(formik.values.password==formik.values.repassword){
        alert("Đăng kí thành công!")
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
                Tạo tài khoản mới
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Dùng email để tạo tài khoản
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Họ"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Tên"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Địa chỉ Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Mật khẩu"
              margin="normal"
              name="password"

              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.repassword && formik.errors.repassword)}
              fullWidth
              helperText={formik.touched.repassword && formik.errors.repassword}
              label="Nhập lại mật khẩu"
              margin="normal"
              name="repassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.repassword}
              variant="outlined"
              />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Tôi đã đọc và chấp nhận
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link 
                    onClick={() => formik.push('/')}
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                    to ='/'
                  >
                    <a href = "/" > Điều khoản</a>
                  </Link>
                </NextLink>
              </Typography>
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
                Đăng kí
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Đã có tài khoản?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Đăng nhập
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default App;
