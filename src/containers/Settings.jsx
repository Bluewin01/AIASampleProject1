import {
    FormStyle, AccountContainer,
    ContentContainer, ProfileInfoContainer,
    StyledInput, ProfilePicture, ProfileInfo
} from '../components/Settings-styles';
import { ButtonStyled } from '../components/Basic-styles';
import { useFormik } from 'formik';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux"
import { getUserAsync } from '../stores/redux/slices/userSlice';
import { useEffect } from 'react';
import { updateSchema } from '../utils/yups'

function Settings() {
    const user = useSelector((state) => state.user.data)
    const dispatch = useDispatch()

    async function fetchData() {
        try {
            dispatch(getUserAsync())
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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

export default Settings;