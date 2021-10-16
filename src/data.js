import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms
} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
    title: 'Facebook'
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    title: 'Twitter'
  },
  {
    id: 3,
    url: 'https://www.Linkedin.com',
    icon: <FaLinkedin />,
    title: 'Linkedin'
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: <FaBehance />,
    title: 'Behance'
  }
]
