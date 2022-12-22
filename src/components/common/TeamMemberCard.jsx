import Popover from '@mui/material/Popover'
import * as React from 'react'
import { Typography } from '@mui/material'

const TeamMemberCard = ({ name, role, imgUrl }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    return (
        <div className="team-member-card mb-3 mb-md-0">
            <div className="image-with-role d-flex">
                <div className="media-wrapper">
                    <img src={imgUrl} width="100%" height="100%" alt="" />
                </div>
                <h6 className="member-role mt-1 mb-2 py-0 ps-1 ps-md-2 pe-1">
                    {role}
                </h6>
            </div>
            <h3
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className="member-name mt-2 pt-0 pt-md-2 mb-0"
            >
                {name}
            </h3>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    marginTop: '10px',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>
                    <h4>Bio</h4>
                    Name : {name} <br />
                    Role: {role}
                </Typography>
            </Popover>
        </div>
    )
}

export default TeamMemberCard
