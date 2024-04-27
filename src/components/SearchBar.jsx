import { CssOutlined, Fullscreen } from '@mui/icons-material'
import { Box, Button, Checkbox, Fade, FormControlLabel, Grow, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'
import { Reorder } from 'framer-motion';

function SearchBar() {
    const [toDo, setToDo] = useState([])
    const [change, setChange] = useState('')
    const [click, setClick] = useState(false)

    const handleAddToDo = () => {
        if (change !== '') {
            setToDo([...toDo, { text: change, visible: true }]);
            setChange('');
        }
    };

    const handleRemoveToDo = (index) => {

        setToDo((prevToDo) =>
            prevToDo.map((item, idx) =>
                idx === index ? { ...item, visible: false } : item
            )
        );


        setTimeout(() => {
            const newTodo = [...toDo];
            newTodo.splice(index, 1);
            setToDo(newTodo)
        }, 200)

    };

    const myFunction = (e) => {
        if (e.key == 'Enter') {
            handleAddToDo()
        }
    }

    return (
        <Fade in={true}>
            <Box
                sx={{
                    p: '1rem',
                    px: ['1rem', '5rem', '10rem'],
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <Typography
                    variant='h1'
                    color='white'
                    sx={{
                        fontSize: ['2em', '3em']
                    }}
                >
                    Lets Add Your To Do
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '1rem'
                    }}
                >
                    <TextField
                        value={change}
                        onChange={(e) => setChange(e.target.value)}
                        label='Enter To Do'
                        variant='outlined'
                        size='small'
                        onKeyDown={myFunction}
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                '& label.Mui-focused': {
                                    color: '#A0AAB4',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#FDFFC2',
                                },
                                '& fieldset': {
                                    borderColor: '#FDFFC2',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FDFFC2',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FDFFC2',
                                },
                            },
                        }}
                        InputProps={{
                            style: { color: '#FDFFC2', }
                        }}
                        InputLabelProps={{
                            style: { color: '#FDFFC2' }
                        }}
                    />
                    <Box
                        onClick={() => handleAddToDo()}
                        sx={{ '& button': { p: 1, display: 'flex', gap: '1rem' } }}
                    >
                        <Button
                            sx={{
                                color: 'white',
                            }}
                            type='submit'
                            color='info'
                            variant='contained'
                            size='medium'
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'auto' }}
                >


                    {toDo.map((item, index) => (
                        <Grow
                            onClick={() => setClick()}
                            in={item.visible
                            } key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        zIndex: -index,
                                        backgroundColor: '#FDFFC2',
                                        borderRadius: '.2rem',
                                        p: '.6rem',
                                        width: '100%',
                                        color: '#FF76CE',
                                        boxShadow: '10px 10px 1px 0px #0288d1'
                                    }}
                                >
                                    {item.text}
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <FormControlLabel
                                        onClick={() => false}
                                        value="top"
                                        control={<Checkbox />}
                                        sx={{ boxShadow: '10px 10px 1px 0px #0288d1', transition: 'all 300ms ease' }}
                                        labelPlacement="top"
                                    />
                                    <Button
                                        onClick={() => handleRemoveToDo(index)}
                                        sx={{ boxShadow: '10px 10px 1px 0px #0288d1' }}
                                        variant="contained"
                                        color="success"
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Grow>
                    ))}
                </Box>
            </Box >
        </Fade>
    )
}

export default SearchBar
