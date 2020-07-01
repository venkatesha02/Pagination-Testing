import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormLabel, InputLabel, Select } from '@material-ui/core';

//import Axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        minWidth: 275,
        //background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));

const date = new Date().toISOString().split('T')[0]

export default function DeploymentForm(props) {

    const [candidateName, setCandidateName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [mobile, setUserMobile] = useState('')
    const [totalYears, setTotalYears] = useState('')
    const [releventYear, setReleventYear] = useState('')
    const [skillSet, setSkillSet] = useState('')
    const [currentCtc, setCurrentCtc] = useState('')
    const [noticePeriod, setNoticePeriod] = useState('')
    const [doj, setDoj] = useState(date)
    const [type, setType] = useState('')
    const [adhar, setAdhar] = useState([])
    const [pan, setPan] = useState([])

    const [candidateNameErr, setCandidateNameErr] = useState({ nErr: true, candidateNameErrMsg: '' })
    const [genderErr, setGenderErr] = useState({ gErr: true, genderErrMsg: '' })
    const [emailErr, setEmailErr] = useState({ eErr: true, emailErrMsg: '' })
    const [mobileErr, setUserMobileErr] = useState({ mErr: true, mobileErrMsg: '' })
    const [totalYearsErr, setTotalYearsErr] = useState({ tErr: false, totalYearsErrMsg: "" })
    const [releventYearErr, setReleventYearErr] = useState({ rErr: false, releventYearErrMsg: "" })
    const [skillSetErr, setSkillSetErr] = useState({ sErr: true, skillSetErrMsg: "" })
    const [currentCtcErr, setCurrentCtcErr] = useState({ ccErr: false, currentCtcErrMsg: "" })
    const [noticePeriodErr, setNoticePeriodErr] = useState({ nErr: false, noticePeriodErrMsg: "" })
    const [expTypeErr, setExpTypeErr] = useState({ typeErr: false, typeErrMsg: "", hide: false })

    const [adharErr, setAdharErr] = useState({ error: false, adharErrMsg: '' })
    const [panErr, setPanErr] = useState({ error: true, panErrMsg: '' })

    const skills = skillSet.split(',');

    const expData = {
        candidateName: candidateName.trim(),
        emailId: email.trim(),
        contactNumber: mobile.trim(),
        gender: gender,
        skillSet: skills,
        dateOfJoining: doj,
        aadharImagePath: adhar,
        panCardImagePath: pan,
        employeeExperianceInformationBean: {
            totalYrs: totalYears.trim(),
            relavantExpInYrs: releventYear.trim(),
            currentCtc: currentCtc.trim(),
            noticePeriodInDys: noticePeriod.trim()
        }
    }


    const fresherData = {
        candidateName: candidateName.trim(),
        emailId: email.trim(),
        contactNumber: mobile.trim(),
        gender: gender,
        skillSet: skills,
        dateOfJoining: doj,
        aadharImagePath: adhar,
        panCardImagePath: pan,
    }


    const istrue = (event) => {

        event.preventDefault()

        if (!candidateNameErr.nErr && !emailErr.eErr && !mobileErr.mErr &&
            !genderErr.gErr && !skillSetErr.sErr && !expTypeErr.TypeErr &&
            !totalYearsErr.tErr && !releventYearErr.rErr && !currentCtcErr.ccErr &&
            !noticePeriodErr.nErr && !adharErr.error && !panErr.error) {

            if (type === "Fresher") {
                console.log("Form Data --->", fresherData)
                alert('Fresher Data Ok', fresherData);

            } else {
                console.log("Form Data --->", expData)
                alert('Experienced Data Ok', expData);

            }

        }
        else {
            if (!candidateName) {
                setCandidateNameErr({
                    ...candidateNameErr,
                    candidateNameErrMsg: `Candidate Name Can't be Blank `
                })
            }

            if (!type) {
                setExpTypeErr({
                    ...expTypeErr,
                    typeErrMsg: `Type can't be blank`
                })
            }

            if (!email) {
                setEmailErr({
                    ...emailErr,
                    emailErrMsg: `Email Address Can't blank`
                })
            }

            if (!totalYears) {
                setTotalYearsErr({
                    ...totalYearsErr,
                    totalYearsErrMsg: `Total Years Can't blank`
                })
            }

            if (!releventYear) {
                setReleventYearErr({
                    ...releventYearErr,
                    releventYearErrMsg: `Relevent Years Can't blank`
                })
            }

            if (!skillSet) {
                setSkillSetErr({
                    ...skillSetErr,
                    skillSetErrMsg: `Skill Set Can't blank`
                })
            }

            if (!currentCtc) {
                setCurrentCtcErr({
                    ...currentCtcErr,
                    currentCtcErrMsg: `Current CTC Can't blank`
                })
            }

            if (!noticePeriod) {
                setNoticePeriodErr({
                    ...noticePeriodErr,
                    noticePeriodErrMsg: `Notice Period Can't blank`
                })
            }

            if (!mobile) {
                setUserMobileErr({
                    ...mobileErr,
                    mobileErrMsg: `Mobile Number Can't blank`
                })
            }

            if (!gender) {
                setGenderErr({
                    ...genderErr,
                    genderErrMsg: `Gender Can't blank`
                })
            }

            if (Array.isArray(pan)) {
                setPanErr({
                    ...panErr,
                    panErrMsg: `Pan Image Can't blank`
                })
            }

            if (Array.isArray(adhar)) {
                setAdharErr({
                    ...adharErr,
                    adharErrMsg: `Adhar Image Can't blank`
                })
            }
            else {
                setAdharErr({
                    ...adharErr,
                    adharErrMsg: ``
                })
            }
        }
    }

    const validForm = (event) => {

        if (event.target.name === 'type') {

            if (type !== '') {
                if (type === 'Experienced') {
                    setExpTypeErr({
                        ...expTypeErr,
                        typeErrMsg: '',
                        hide: true,
                        typeErr: true
                    })
                }
                else {
                    setExpTypeErr({
                        ...expTypeErr,
                        hide: false,
                        typeErr: false,
                        typeErrMsg: '',
                    })
                }
            }

            else {
                setExpTypeErr({
                    ...expTypeErr,
                    typeErrMsg: `Please Select Experience Type`,
                    typeErr: true

                })
            }

            if (type === '') {
                setExpTypeErr({
                    ...expTypeErr,
                    typeErrMsg: `Type Can't blank`,
                    typeErr: true
                })
            }
        }

        if (event.target.name === 'candidateName') {
            if (candidateName.trim().match(/^[a-zA-Z ]*$/) && !candidateName.trim().match(/[^\w\s]|(.)(?=\1)/gi) && candidateName.trim() !== '') {
                setCandidateNameErr({
                    ...candidateNameErr,
                    candidateNameErrMsg: '',
                    nErr: false
                })
            }
            else {
                setCandidateNameErr({
                    ...candidateNameErr,
                    candidateNameErrMsg: 'Candidate Name should be Character',
                    nErr: true
                })
            }
            if (candidateName === '') {
                setCandidateNameErr({
                    ...candidateNameErr,
                    nErr: true,
                    candidateNameErrMsg: `Candidate Name Can't blank`
                })
            }
        }

        if (event.target.name === 'email') {
            if (email.trim().match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
                setEmailErr({
                    ...emailErr,
                    emailErrMsg: '',
                    eErr: false
                })

            }
            else {
                setEmailErr({
                    ...emailErr,
                    emailErrMsg: 'Invalid!. Email format should be  ex: example@xxx.xxx',
                    eErr: true
                })
            }
            if (email === '') {
                setEmailErr({
                    ...emailErr,
                    eErr: true,
                    emailErrMsg: `Email Address Can't blank`
                })
            }
        }

        if (event.target.name === 'mobile') {
            if (mobile.trim().match(/^[0-9]{10}$/) && mobile.trim() !== '') {
                setUserMobileErr({
                    ...mobileErr,
                    mobileErrMsg: '',
                    mErr: false
                })
            }
            else {
                setUserMobileErr({
                    ...mobileErr,
                    mobileErrMsg: 'Mobile Number contains only 10 digits',
                    mErr: true
                })
            }
            if (mobile === '') {
                setUserMobileErr({
                    ...mobileErr,
                    mobileErrMsg: `Mobile Number Can't blank`,
                    mErr: true
                })
            }
        }

        if (event.target.name === 'totalYears') {
            if (totalYears.trim().match(/(\d+\.\d{1,2})/g) || totalYears.trim().match(/^[0-9]+$/)) {
                if (totalYears !== "") {
                    setTotalYearsErr({
                        ...totalYearsErr,
                        totalYearsErrMsg: '',
                        tErr: false
                    })
                }
            }
            else {
                setTotalYearsErr({
                    ...totalYearsErr,
                    totalYearsErrMsg: 'Total years only digits like: x.xx',
                    tErr: true,
                })
            }
            if (totalYears === '') {
                setTotalYearsErr({
                    ...totalYearsErr,
                    totalYearsErrMsg: `Total years Can't be blank`,
                    tErr: true
                })
            }
        }

        if (event.target.name === 'releventYear') {
            if (releventYear.trim().match(/(\d+\.\d{1,2})/g) || releventYear.trim().match(/^[0-9]+$/)) {
                if (releventYear !== "") {
                    setReleventYearErr({
                        ...releventYearErr,
                        releventYearErrMsg: '',
                        rErr: false
                    })
                }
            }
            else {
                setReleventYearErr({
                    ...releventYearErr,
                    releventYearErrMsg: 'Relevent year only digits like: x.xx',
                    rErr: true,
                })
            }
            if (releventYear === '') {
                setReleventYearErr({
                    ...releventYearErr,
                    releventYearErrMsg: `Relevent year Can't be blank`,
                    rErr: true
                })
            }
        }

        if (event.target.name === 'currentCtc') {
            if (currentCtc.trim().match(/(\d+\.\d{1,2})/g) || currentCtc.trim().match(/^[0-9]+$/)) {
                if (currentCtc !== "") {
                    setCurrentCtcErr({
                        ...currentCtcErr,
                        currentCtcErrMsg: '',
                        ccErr: false
                    })
                }
            }
            else {
                setCurrentCtcErr({
                    ...currentCtcErr,
                    currentCtcErrMsg: 'CTC only digits like: xxx or xxxx.xx',
                    ccErr: true,
                })
            }
            if (currentCtc === '') {
                setCurrentCtcErr({
                    ...currentCtcErr,
                    currentCtcErrMsg: `CTC Can't be blank`,
                    ccErr: true
                })
            }
        }

        if (event.target.name === 'skillSet') {
            if (skillSet.trim().match(/^[a-zA-Z #,+]*$/) && skillSet.trim() !== '') {
                if (skillSet !== "") {
                    setSkillSetErr({
                        ...skillSetErr,
                        skillSetErrMsg: '',
                        sErr: false
                    })
                }
            }
            else {
                setSkillSetErr({
                    ...skillSetErr,
                    skillSetErrMsg: 'This Filed accepts only alphabets',
                    sErr: true,
                })
            }
            if (skillSet === '') {
                setSkillSetErr({
                    ...skillSetErr,
                    skillSetErrMsg: `Skill Can't be blank`,
                    sErr: true
                })
            }
        }

        if (event.target.name === 'noticePeriod') {
            if (noticePeriod.trim().match(/^[0-9]{1,3}$/) && noticePeriod.trim() !== '') {
                setNoticePeriodErr({
                    ...noticePeriodErr,
                    noticePeriodErrMsg: '',
                    nErr: false
                })
            }
            else {
                setNoticePeriodErr({
                    ...noticePeriodErr,
                    noticePeriodErrMsg: `Notice period contains only digits`,
                    nErr: true
                })
            }
            if (noticePeriod === '') {
                setNoticePeriodErr({
                    ...noticePeriodErr,
                    noticePeriodErrMsg: `Notice period Can't blank`,
                    nErr: true
                })
            }
        }

        if (event.target.name === 'gender') {

            if (gender !== '') {
                setGenderErr({
                    ...genderErr,
                    genderErrMsg: ``,
                    gErr: false
                })
            }

            else {
                setGenderErr({
                    ...genderErr,
                    genderErrMsg: `Please Select Gender Type`,
                    gErr: true
                })
            }

            if (gender === '') {
                setGenderErr({
                    ...genderErr,
                    genderErrMsg: `Gender Can't blank`,
                    gErr: true
                })
            }
        }

        if (event.target.name === 'adhar') {
            var numberOfAdharFile = adhar.length;
            adhar.map(val => {
                if (val.trim().match(/([a-zA-Z0-9\s_\\.\-:])+(.jpeg|.png|.jpg|.bmp|.JPEG|.PNG|.JPG|.BMP|.pdf|.PDF)$/) && val.trim() !== '' && numberOfAdharFile <= 2) {

                    setAdharErr({
                        ...adharErr,
                        adharErrMsg: '',
                        error: false
                    })

                }
                else {
                    if (numberOfAdharFile >= 2) {
                        setAdharErr({
                            ...adharErr,
                            adharErrMsg: 'You can upload only 2 images i.e front and back side',
                            error: true
                        })
                    }
                    else {
                        setAdharErr({
                            ...adharErr,
                            adharErrMsg: 'Adhar Image Accepts only image or pdf',
                            error: true
                        })
                    }

                }
                if (val === '') {
                    setAdharErr({
                        ...adharErr,
                        adharErrMsg: `Adhar Can't be blank`,
                        error: true
                    })
                }
                return
            })
        }

        if (event.target.name === 'pan') {
            var numberOfPanFile = pan.length;
            pan.map(val => {
                if (val.trim().match(/([a-zA-Z0-9\s_\\.\-:])+(.jpeg|.png|.jpg|.bmp|.JPEG|.PNG|.JPG|.BMP|.pdf|.PDF)$/) && val.trim() !== '' && numberOfPanFile <= 2) {

                    setPanErr({
                        ...panErr,
                        panErrMsg: '',
                        error: false
                    })

                }
                else {
                    if (numberOfPanFile >= 2) {
                        setPanErr({
                            ...panErr,
                            panErrMsg: 'You can upload only 2 images i.e front and back side',
                            error: true
                        })
                    }
                    else {
                        setPanErr({
                            ...panErr,
                            panErrMsg: 'Pan Image Accepts only image or pdf',
                            error: true
                        })
                    }
                }
                if (val === '') {
                    setPanErr({
                        ...panErr,
                        panErrMsg: `PAN Can't be blank`,
                        error: true
                    })
                }
                return val
            })

        }

        return sedCorr()
    }

    let sedCorr = async () => {

        if (candidateNameErr !== true && emailErr !== true && mobileErr !== true && genderErr !== true &&
            totalYearsErr !== true && releventYearErr !== true && currentCtcErr !== true && skillSetErr !== true &&
            noticePeriodErr !== true && adharErr !== true && panErr !== true) {
            return true
        }
    }

    const classes = useStyles();

    const handleFile = (e) => {

        if (e.target.name === "adhar") {
            var adharImage = [e.target.files]

            adharImage.map((val) => {
                let items = Object.values(val);
                let fetchedAccount = []

                for (let key in items) {
                    let account = items[key].name
                    fetchedAccount.push(account)
                    setAdhar(fetchedAccount)
                }
                return
            })
            console.log("adhar ", adhar)
        }

        else {
            var panImage = [e.target.files]
            panImage.map((val) => {
                let items = Object.values(val);
                let fetchedAccount = []

                for (let key in items) {
                    let account = items[key].name
                    fetchedAccount.push(account)
                    setPan(fetchedAccount)
                }
                return
            })
            console.log("pan ", pan)
        }

    }

    return (
        <>
            <div style={{ marginTop: "60px" }}>
                <Container className={classes.cardGrid} maxWidth="md">
                    <div style={{ marginTop: "30px" }}>
                        <Card >
                            <CardContent>
                                <div className="col-md-12  mt-2 ">
                                    <div className={classes.paper}>

                                        <Typography component="h1" variant="h5">
                                            Deployemnt Form
                            </Typography>

                                        <Grid item md={12}>
                                            <form onSubmit={istrue} className={classes.form} noValidate>

                                                <Grid container spacing={3}>

                                                    <Grid item xs={6}>
                                                        <TextField
                                                            name="candidateName"
                                                            required
                                                            fullWidth
                                                            label="Candidate Name"
                                                            autoFocus
                                                            onKeyUp={(e) => validForm(e)}
                                                            onChange={(e) => { setCandidateName(e.target.value) }}
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{candidateNameErr.candidateNameErrMsg}</p>

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField
                                                            name='email'
                                                            autoComplete="email"
                                                            required
                                                            fullWidth
                                                            label="Email Address"
                                                            onBlur={(e) => validForm(e)}
                                                            value={email}
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{emailErr.emailErrMsg}</p>

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            name='mobile'
                                                            label="Phone Number"
                                                            autoComplete="phone-number"
                                                            onBlur={(e) => validForm(e)}
                                                            value={mobile}
                                                            onChange={(e) => { setUserMobile(e.target.value) }}
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{mobileErr.mobileErrMsg}</p>

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel >Experience Type</InputLabel>
                                                        <Select
                                                            native
                                                            fullWidth
                                                            name='gender'
                                                            onClick={(e) => validForm(e)}
                                                            onChange={(e) => setGender(e.target.value)}
                                                        >
                                                            <option value=''>Select Gender</option>
                                                            <option value='M'>Male</option>
                                                            <option value='F'>Female</option>
                                                            <option value='O'>Other</option>

                                                        </Select>
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{genderErr.genderErrMsg}</p>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <TextField
                                                            name='skillSet'
                                                            required
                                                            fullWidth
                                                            label="Skill Set"
                                                            onKeyUp={(e) => validForm(e)}
                                                            onChange={(e) => { setSkillSet(e.target.value) }}
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{skillSetErr.skillSetErrMsg}</p>
                                                    </Grid>


                                                    <Grid item xs={6}>
                                                        <TextField
                                                            label="Date of Joining"
                                                            type="date"
                                                            name='doj'
                                                            max={date}
                                                            defaultValue={date}
                                                            onChange={(e) => { setDoj(e.target.value) }}
                                                            className={classes.textField}
                                                            InputLabelProps={{ shrink: true, }}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <FormLabel component="legend">Adhar Image *</FormLabel>
                                                        <input
                                                            required
                                                            type="file"
                                                            name="adhar"
                                                            onBlur={(e) => validForm(e)}
                                                            onChange={handleFile}
                                                            multiple
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{adharErr.adharErrMsg}</p>

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <FormLabel component="legend">PAN Image *</FormLabel>
                                                        <input
                                                            required
                                                            type="file"
                                                            name='pan'
                                                            onBlur={(e) => validForm(e)}
                                                            onChange={handleFile}
                                                            multiple
                                                        />
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{panErr.panErrMsg}</p>

                                                    </Grid>

                                                    <Grid item xs={6}>

                                                        <InputLabel >Experience Type</InputLabel>

                                                        <Select
                                                            native
                                                            fullWidth
                                                            name='type'
                                                            // value={type}
                                                            onClick={(e) => validForm(e)}
                                                            onChange={(e) => setType(e.target.value)}
                                                        >
                                                            <option value=''>Select Type</option>
                                                            <option value='Fresher'>Fresher</option>
                                                            <option value='Experienced'>Experienced</option>

                                                        </Select>
                                                        <p style={{ color: 'red', fontSize: '12px' }}>{expTypeErr.typeErrMsg}</p>

                                                    </Grid>
                                                </Grid>

                                                {expTypeErr.hide ? <div style={{ marginTop: "20px" }}>
                                                    <fieldset>
                                                        <legend>Experience:</legend>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={6} >
                                                                <TextField
                                                                    name='totalYears'
                                                                    required
                                                                    fullWidth
                                                                    label="Total Years"
                                                                    onKeyUp={(e) => validForm(e)}
                                                                    onChange={(e) => { setTotalYears(e.target.value) }}
                                                                />
                                                                <p style={{ color: 'red', fontSize: '12px' }}>{totalYearsErr.totalYearsErrMsg}</p>
                                                            </Grid>

                                                            <Grid item xs={6} >
                                                                <TextField
                                                                    name='releventYear'
                                                                    required
                                                                    fullWidth
                                                                    label="Relevent Years"
                                                                    onKeyUp={(e) => validForm(e)}
                                                                    onChange={(e) => { setReleventYear(e.target.value) }}
                                                                />
                                                                <p style={{ color: 'red', fontSize: '12px' }}>{releventYearErr.releventYearErrMsg}</p>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    name='currentCtc'
                                                                    required
                                                                    fullWidth
                                                                    label="Current CTC"
                                                                    onKeyUp={(e) => validForm(e)}
                                                                    onChange={(e) => { setCurrentCtc(e.target.value) }}
                                                                />
                                                                <p style={{ color: 'red', fontSize: '12px' }}>{currentCtcErr.currentCtcErrMsg}</p>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <TextField
                                                                    name='noticePeriod'
                                                                    required
                                                                    fullWidth
                                                                    label="Notice Period in days"
                                                                    onKeyUp={(e) => validForm(e)}
                                                                    onChange={(e) => { setNoticePeriod(e.target.value) }}
                                                                />
                                                                <p style={{ color: 'red', fontSize: '12px' }}>{noticePeriodErr.noticePeriodErrMsg}</p>
                                                            </Grid>
                                                        </Grid>
                                                    </fieldset>
                                                </div> : null}
                                                <div style={{ marginTop: "20px" }}>
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}>
                                                        Submit
                                    </Button>
                                                </div>
                                            </form>
                                        </Grid>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    );
}
