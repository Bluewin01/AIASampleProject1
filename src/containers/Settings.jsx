import { ButtonStyled } from '../components/Basic-styles';
import { useFormik } from 'formik';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux"
import { updateSchema } from '../utils/yups'
import { Form, Input } from "antd";
import styled from "styled-components";
import headerBackground from "../assets/image/redbg.jpg";

function Settings() {
    const user = useSelector((state) => state.user.data)
    const dispatch = useDispatch()

    // async function fetchData() {
    //     try {
    //         dispatch(getUserAsync())
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    console.log(user)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            phone: ""
        },
        onSubmit: (e) => {
            console.log(e)
        }
    })

    const yupSync = {
        async validator({ field }, value) {
            await updateSchema.validateSyncAt(field, { [field]: value })
        }
    }

    return (
        <ContentContainer>
            <AccountContainer>
                <ProfileInfoContainer>
                    <ProfilePicture></ProfilePicture>
                    <h3>Name</h3>
                    <ProfileInfo>
                        <p>Email</p>
                        <MailOutlined className="site-form-item-icon" />
                        <hr />
                    </ProfileInfo>
                    <ProfileInfo>
                        <p>Phone Number</p>
                        <PhoneOutlined className="site-form-item-icon" />
                        <hr />
                    </ProfileInfo>
                </ProfileInfoContainer>
                <FormStyle
                    onFinish={formik.handleSubmit}
                >
                    <h2>Edit User Information</h2>
                    <hr />
                    <label>Email</label>
                    <FormStyle.Item
                        name="email"
                        rules={[yupSync]}
                    >
                        <StyledInput
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </FormStyle.Item>

                    <label>Name</label>
                    <FormStyle.Item
                        name="name"
                        rules={[yupSync]}
                    >
                        <StyledInput
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type="name"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </FormStyle.Item>

                    <label>Phone Number</label>
                    <FormStyle.Item
                        name="phone"
                        rules={[yupSync]}
                    >
                        <StyledInput
                            prefix={<PhoneOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="Phone Number"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </FormStyle.Item>

                    <label>Password</label>
                    <FormStyle.Item
                        name="password"
                        rules={[yupSync]}
                    >
                        <StyledInput
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </FormStyle.Item>

                    <FormStyle.Item>
                        <ButtonStyled type="primary" htmlType="submit">
                            Submit
                        </ButtonStyled>
                    </FormStyle.Item>
                </FormStyle>
            </AccountContainer>
        </ContentContainer>
    );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${headerBackground});
  background-size: 100% 140px;
  background-repeat: no-repeat;
  background-position: top;
  padding: 80px 20px;
  border: 1px solid grey;
`;

const FormStyle = styled(Form)`
  background-color: white;
  width: 67%;
  border: 1px solid grey;
  padding: 20px;

  hr {
    margin: 10px 0;
  }
`;

const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileInfoContainer = styled.div`
  width: 30%;
  background: white;
  border: 1px solid grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const StyledInput = styled(Input)`
  width: 50%;
`;

const ProfilePicture = styled.div`
  border: 2px solid green;
  width: 50%;
  padding-top: 50%;
`;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 0;
  border-bottom: 1px solid grey;

  p {
    font-size: 15px;
    width: 90%;
  }
`;

export default Settings;