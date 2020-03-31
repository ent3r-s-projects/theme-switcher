# Theme Switch

Based on [this](https://www.youtube.com/watch?v=rXuHGLzSmSE) video by fireship

Preview on codepen.io: [https://codepen.io/ent3r_/full/MWwxozz](https://codepen.io/ent3r_/full/MWwxozz)

---

This theme switch uses classes and CSS-variables to define the color scheme.

There are three classes responsible for theming. `light`, `dark`, and `solar`. These change the CSS-variables so that the color theme on the page is changed.

The classes are changed using JS onclick events. The onclick events are bound to the different theming buttons.

In case the user clicks on the light or dark theme, the script simply replaces the `light` class with the `dark` class, and vise versa. It then saves the preference in localStorage, with the key `theme`.

In case the user clicks on the solarize button, the script toggles the `solar` class. This is then stored in a variable that is either true if `solar` is now in the classlist, or false if not. Then, the script saves the preference to localstorage with the key `solar`. If the user removes solarizing, the whole key-value pair is removed.

The script also takes in to account whether `prefers-color-scheme` is set. It then sets the theme accordingly on first use. If the user changes the theme manually, that theme is used.
