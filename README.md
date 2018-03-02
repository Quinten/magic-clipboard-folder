# magic-clipboard-folder

The goal of this utility is to provide a simple way to copy text from an image file to your clipboard.

Imagine the following scenario:

A client sends you an email with a screenshot and complains there is something wrong with a specific webpage. The client forgot to add a link in his email to that specific webpage. But luckily you can see the browser's address bar, only... the url is very, very long.

Instead of typing the whole thing over again, you take a smaller screenshot of the address bar part only. You drop that smaller screenshot in a magic folder on your desktop and then simply paste the whole text from your clipboard in the address bar of your own browser.

## Installing

### Before you begin

This utility uses the Google Cloud Vision API. So you must have a Google Cloud Platform account.

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Cloud Vision API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

Tip: Select the role 'Owner' and use JSON as output format. Then save the file somewhere on your local machine and add the following to your `.bashrc` or `.bash_profile`:

```
    export GOOGLE_APPLICATION_CREDENTIALS="/full/path/to/service-account-file.json"
```

### Next

Make sure you have Node.js and npm installed on your local machine.

### And finally

```
    npm install -g magic-clipboard-folder
```

## Usage

### Starting the utility

Create the magic folder in a convenient place on your machine. It can be anywhere. I like to keep it on my desktop, because that is where all my screenshots go.

```
    cd ~/Desktop
    mkdir magic-folder
```

Watch that folder with this utility.

```
    cd ~/Desktop/magic-folder
    magic-clipboard-folder
```

Keep it running! You must rerun this command each time your machine reboots, but alternativly you can set it up with [pm2][pm2] to start on boot.

[pm2]: https://www.npmjs.com/package/pm2

### Running the script

Finally take a screenshot of some part of the screen with some text in it (on mac `command + shift + 4`) and drop it in the magic folder.
You will hear a system beep when the analysing by Google Cloud Vision is done. Now the text is in your clipboard and you can paste it like any other text.

### Credits

Thanks to Christophe Herreman for the words "You can't really copy that because it is in a screenshot."

This is a very simple mashup script of existing npm modules, have alook at the `package.json`.

### License

MIT




