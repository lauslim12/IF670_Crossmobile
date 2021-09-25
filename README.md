# IF670 - Crossmobile

This is the repository used to store Mobile Cross-Platform class assignments in university.

## Requirements

- [Android Studio (optional)](https://developer.android.com/studio)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Node.js](https://nodejs.org/)
- Shell that supports `make` if you want to run the helper scripts below.

## Installation

As mentioned above, you need Ionic CLI in order to launch the applications. Please use `npm install -g @ionic/cli` in order to install the CLI. You might also need Android Studio if you are compiling the apps natively.

After you have done that, please do:

```bash
git clone git@github.com:lauslim12/IF670_Crossmobile.git
cd IF670_Crossmobile/<YOUR_PREFERRED_LAB_MODULE>
npm install
ionic serve
```

## Native-Compilation

If you want to run the apps natively, you can do so by following these steps below.

```bash
cd IF670_Crossmobile/<YOUR_PREFERRED_LAB_MODULE>
ionic capacitor add android
ionic capacitor copy android
```

Sometimes, `ionic capacitor copy android` will not successfully install all of the Capacitor dependencies. You may have to synchronize your Capacitor with `ionic capacitor sync android`.

After you have done that, you will see an `android` folder. Open it on Android Studio, and run it as usual (with the emulator) or you can build it as APK.

Note that the process of `ionic capacitor sync android` and the building of the APK must happen in the same OS. You cannot perform `ionic capacitor sync android` in WSL, copy the resulting folder to the Windows OS, and then trying to build the APK. You have to also perform `ionic capacitor sync android` in the OS that you want to use to build the application.

The folders `android` and `build` will not be committed to the repository.

## Scripts

Several helper scripts have been set up at this repository to help with the development.

- `make clean` to destroy all `node_modules`, `android`, and `build` folders in the repository.
- `make move` to move a single folder from my WSL to my `D` disk in Windows. Accepts a single `FOLDER_NAME` as a parameter.

Examples:

```bash
$ make clean
./Modul04_32827/32827-NicholasDwiartoW/node_modules

$ make move FOLDER_NAME=Modul04_32827/32827-NicholasDwiartoW/android
# no output, will appear in 'D:' disk
```
