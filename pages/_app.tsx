import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

//  $background
//  $foreground
//  $text
//  $secondary
//  $accent
//  $selection
//  $primary
//  $primaryLight
//  $primaryBorder
//  $primarySolidHover
//  $primaryShadow
//  $success
//  $warning
//  $error
//  $link
//  $code
//  $accent0
//  $accent1
//  $accent2
//  $accent3
//  $accent4
//  $accent5
//  $accent6
//  $accent7
//  $accent8
//  $accent9
//  $border
//  $hover


export const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {
         // Background & text in a lighter beige palette
         background: '#F2E8D5',  // Soft, light beige
         foreground: '#000000',
         text: '#000000', // Black text for contrast
         
         // Brand / accent colors
         secondary: '#8B5A2B',  
         accent: '#BB6B2C',

         // Additional tokens
         selection: '#BB6B2C',
         primary: '#BB6B2C',
         primaryLight: '#D18754',
         primaryBorder: '#AC6432',
         primarySolidHover: '#9C582C',
         primaryShadow: 'rgba(187, 107, 44, 0.3)',

         // Success/warning/error (example values)
         success: '#4CAF50',
         warning: '#FFC107',
         error: '#F44336',

         // Links, code blocks, etc.
         link: '#BB6B2C',
         code: '#D2B48C',

         // Neutral / accent shades
         accent0: '#FAFAF8',
         accent1: '#F2EEE8',
         accent2: '#E9E4D9',
         accent3: '#E0D7C9',
         accent4: '#D7CAB9',
         accent5: '#CEC0AF',
         accent6: '#BBA789',
         accent7: '#AA9473',
         accent8: '#8B7C61',
         accent9: '#6C614F',

         // Borders & hover
         border: '#CCCCCC',
         hover: '#F3EFE6',
      },
   },
});

export const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {
         // Dark background for contrast
         background: '#2F2F2F', // Dark gray background
         foreground: '#FFFFFF', // White text for contrast
         text: '#FFFFFF', // White text for readability

         // Brand / accent colors
         secondary: '#8B5A2B',  
         accent: '#BB6B2C',

         // Additional tokens
         selection: '#BB6B2C',
         primary: '#BB6B2C',
         primaryLight: '#D18754',
         primaryBorder: '#AC6432',
         primarySolidHover: '#9C582C',
         primaryShadow: 'rgba(187, 107, 44, 0.3)',

         // Success/warning/error (example values)
         success: '#4CAF50',
         warning: '#FFC107',
         error: '#F44336',

         // Links, code blocks, etc.
         link: '#BB6B2C',
         code: '#D2B48C',

         // Neutral / accent shades
         accent0: '#FAFAF8',
         accent1: '#F2EEE8',
         accent2: '#E9E4D9',
         accent3: '#E0D7C9',
         accent4: '#D7CAB9',
         accent5: '#CEC0AF',
         accent6: '#BBA789',
         accent7: '#AA9473',
         accent8: '#8B7C61',
         accent9: '#6C614F',

         // Borders & hover
         border: '#444444',
         hover: '#333333',
      },
   },
   className: 'dark'
});

function MyApp({Component, pageProps}: AppProps) {
   return (
      <NextThemesProvider
         defaultTheme="system"
         enableSystem
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
