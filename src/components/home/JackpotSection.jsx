import { Box, Button, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const JackpotSection = () => {
    return (
        <Box sx={{ mx: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    color: "white",
                }}
            >
                {/* Left Section */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* Green Dot */}
                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            bgcolor: "#00FF3C",
                            borderRadius: "50%",
                        }}
                    />
                    <Typography fontSize={16} fontWeight={600}>
                        Jackpot of the Day
                    </Typography>
                </Box>

                {/* Right Section */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* More Button */}
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            color: "white",
                            borderColor: "rgba(255,255,255,0.3)",
                            borderRadius: "8px",
                            px: 1.5,
                            py: 0.5,
                            fontSize: 12,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        More
                        <ChevronRightIcon sx={{ fontSize: 18 }} />
                    </Button>

                    {/* Navigation Buttons */}
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                            sx={{
                                width: 30,
                                height: 30,
                                borderRadius: "6px",
                                bgcolor: "#2F2F2F",
                                color: "white",
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>

                        <IconButton
                            sx={{
                                width: 30,
                                height: 30,
                                borderRadius: "6px",
                                bgcolor: "#2F2F2F",
                                color: "white",
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    mb: 2,
                    // maxWidth: 430,
                    // borderRadius: "20px",
                    overflow: "hidden",
                }}
            >
                {/* Background */}
                <Box
                    component="img"
                    src="/assets/christmas1-WPz6Ce1h.webp"
                    alt="Background"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        // borderRadius: "20px",
                        display: "block",
                    }}
                />

                {/* Inner Content */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                    }}
                >
                    {/* Trophy + Coins */}
                    <Box sx={{ position: "relative" }}>
                        <Box
                            component="img"
                            src="/assets/trophy-B3u8sNrg-Bogwg3F_.webp"
                            alt="Trophy"
                            sx={{ width: "110px" }}
                        />
                    </Box>

                    {/* Right-side text */}
                    <Box sx={{ ml: 3, mt: 3, flex: 1 }}>
                        <Box sx={{ display: "flex" }}>
                            <Box component="img" src="/assets/grass.png" alt="" width={30} height={30} />
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    color: "rgb(0,255,153)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                Daily Jackpot
                            </Typography>
                            <Box component="img" src="/assets/grass.png" alt="" width={30} height={30} sx={{ transform: "scaleX(-1)" }} />
                        </Box>
                        <Typography sx={{ color: "#ddd", mt: 0.5, fontSize: "16px" }}>
                            Jackpot prize pool
                        </Typography>

                        <Box
                            sx={{
                                px: 2,
                                py: 1,
                                ml: 1,
                                borderRadius: "12px",
                                bgcolor: "rgba(0,0,0,0.55)",
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "rgb(36,238,137)",
                                width: "fit-content",
                            }}
                        >
                            ₹1941040.36
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default JackpotSection;
