/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Fontawesome': ['Font Awesome 5 Free', 'system-ui'],
    },
    screens: {
      'sm': {'max': '739px'},
      'md': {'min': '740px', 'max': '1023px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1024px', 'max': '1199px'},
      '2xl': {'min': '1200px'},
    },
    extend: {
      backgroundImage: {
        'Contact-bg': "url('https://themesflat.co/html/dreamhomehtml/assets/images/section/bg-contact.png')"
      },
      transformOrigin: {
        'rotate-text': '0px 60px'
      },
      boxShadow: {
        'shadowDefault': '0px 4px 26px 0px rgba(66, 71, 76, 0.08)',
        'shadowDefault3': '4px 4px 18px 4px rgba(66, 71, 76, 0.13)',
        'shadowDefault2': '4px 5px 26px 11px rgba(66, 71, 76, 0.15)',
      },
      keyframes: {
        rotateY: {
          '0%': {transform: 'rotateY(0deg)'},
          '100%': {transform: 'rotateY(360deg)'},
        },
        rotateYHoverPart: {
          '0%': {transform: 'rotateY(0deg)'},
          '100%': {transform: 'rotateY(180deg)'},
        },
        rotateYUnHoverPart: {
          '0%': {transform: 'rotateY(180deg)'},
          '100%': {transform: 'rotateY(0deg)'},
        },
        toHeight: {
          '0%': {height: '0%'},
          '100%': {height: '100%'},
        },
        iconMoving: {
          '0%': {
            transform: 'translateY(0px)',
            opacity: 1
          },
          '49%': {
            transform: 'translateY(20px)',
            opacity: 0
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          },
        },
        iconXMoving: {
          '0%': {
            transform: 'translateX(0px)',
            opacity: 1
          },
          '49%': {
            transform: 'translateX(20px)',
            opacity: 0
          },
          '50%': {
            transform: 'translateX(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: 1
          },
        },

        handleOpenSidebar: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0%)'},
        },

        handleCloseSidebar: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        scaleSelection: {
          '0%' : {transform: 'scale(0.5)'},
          '100%': {transform: 'scale(1)'}
        },

        rotateMoveDown: {
          '0%' : {transform: 'rotate(-45deg)'},
          '100%': {transform: 'rotate(135deg)'}
        },
        rotateMoveUp: {
          '0%' : {transform: 'rotate(135deg)'},
          '100%': {transform: 'rotate(-45deg)'}
        },
        rotateText: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        }
        
      },
      animation: {
        iconEffect: 'iconMoving 0.3s linear',
        iconXEffect: 'iconXMoving 0.3s linear',
        sidebarOpenEffect: 'handleOpenSidebar 0.4s linear',
        sidebarCloseEffect: 'handleCloseSidebar 0.4s linear',
        scaleSelectionEffect: 'scaleSelection 0.5s linear',
        rotateUpEffect: 'rotateMoveUp 0.3s linear',
        rotateDownEffect: 'rotateMoveDown 0.3s linear',
        rotateTextEffect: 'rotateText 10s linear infinite',
        spinText: 'spin 8s linear infinite',
        toHeightEffect: 'toHeight 1s ease-out',
        bounceSlow: 'bounce 4s linear infinite',
        rotateYEffect: 'rotateY 0.3s linear',
        rotateYHoverPartEffect: 'rotateYHoverPart 0.4s linear',
        rotateYUnHoverPartEffect: 'rotateUnYHoverPart 0.4s linear',
      }
    },
    colors: {
      text_color: '#120A21',
      primary: '#FFA920',
      fromColor: 'rgba(0, 0, 0, 0.5)',
      none: 'transparent',
      toColor: 'rgba(0, 0, 0, 1)',
      gradient: 'linear-gradient(to bottom, transparent 0%, black 100%)'
    }
  },
  plugins: [],
}

