import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
    Button,
    Container,
    DialogTitle,
    Drawer,
    IconButton,
    Link,
    ModalClose,
    Sheet,
    Stack,
    Typography,
    Box
} from '@mui/joy';
import Contact from '../../pages/Contact/Contact'
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Sheet
                sx={{
                    backgroundColor: 'white',
                    height: '64px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                }}
            >
                <Container>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
                        {/* Left Links */}
                        <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" gap={2}>
                            <Link href="/">
                                <Typography level="body-sm">Home</Typography>
                            </Link>
                            <Link href="/">
                                <Typography level="body-sm">UAE Labor laws bot</Typography>
                            </Link>
                            <Link href="/Contact">
                                <Typography level="body-sm">Contact</Typography>
                            </Link>
                            <Box
                                component="button"
                                sx={{
                                    backgroundColor: 'purple',
                                    color: '#ffffff',
                                    borderRadius: '100px',
                                    padding: '8px 24px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#9370db',
                                    },
                                }}
                            >
                                Beta
                            </Box>
                        </Stack>

                        {/* Center Logo & Branding */}
                        <Link
                            href="/"
                            underline="none"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <Box
                                component="img"
                                src="/logo.svg"
                                alt="Pineapply AI Logo"
                                sx={{
                                    width: '32px',
                                    height: 'auto'
                                }}
                            />
                            <Typography
                                level="title-lg"
                                color="appTheme"
                                sx={{
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Pineapply AI
                            </Typography>
                        </Link>

                        {/* Right Links */}
                        <Stack sx={{ display: { xs: 'none', md: 'flex' } }} direction="row" gap={2}>
                            <Link href="/">
                                <Button color="appTheme" variant="outlined">
                                    Log in
                                </Button>
                            </Link>
                            <Button color="appTheme" variant="solid">
                                Create an account
                            </Button>
                        </Stack>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs: 'initial', md: 'none' } }}
                            color="appTheme"
                            variant="solid"
                        >
                            <Icon fontSize="28px" icon="jam:menu" />
                        </IconButton>
                    </Stack>
                </Container>
            </Sheet>

            {/* Mobile Drawer */}
            <Drawer
                size="md"
                open={open}
                anchor="top"
                onClose={() => setOpen(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'white',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}
            >
                <Sheet
                    sx={{
                        boxSizing: 'border-box',
                        borderRadius: 'md',
                        m: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <Stack sx={{ p: 3 }} gap={1}>
                        <ModalClose />
                        <DialogTitle sx={{ justifyContent: 'center', mb: 3, textAlign: 'center' }}>
                            <Box
                                component="img"
                                src="/logo.svg"
                                alt="Pineapply AI Logo"
                                sx={{
                                    width: '32px',
                                    height: 'auto'
                                }}
                            />
                            <Typography
                                level="title-lg"
                                color="appTheme"
                                sx={{
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Pineapply AI
                            </Typography>
                        </DialogTitle>
                        <Link href="/">
                            <Button sx={{ width: '100%' }} color="neutral" variant="plain">
                                Home
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button sx={{ width: '100%' }} color="neutral" variant="plain">
                                UAE Labor Bot
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button sx={{ width: '100%' }} color="neutral" variant="plain">
                                Contact
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button sx={{ width: '100%' }} color="appTheme" variant="solid">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button sx={{ width: '100%' }} color="appTheme" variant="solid">
                                Create an account
                            </Button>
                        </Link>
                    </Stack>
                </Sheet>
            </Drawer>
        </>
    );
};

export default Navbar;