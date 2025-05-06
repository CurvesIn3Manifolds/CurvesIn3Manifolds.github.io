# Testing
This site is templated using Jekyll.
To preview on your local machine, you must install Jekyll [here](https://jekyllrb.com/docs/installation/).

Documentation for using Jekyll can be found [here](https://jekyllrb.com/docs/usage/).


# Tagging Images/Videos
## Images
By default, the template will assume that images are have extension `.jpg`.
All images should be put in the `assets/images/album/2025-05-05-Seifert-Fiberings` folder.
Once done so, we should append the following code in `album.json` in the `images` object:
```
"ex_img" : {
    "title": "example image",
    "description": "example description",
    "tags": "tag1 tag2 tag-with-multiple-words"
}
```
where `ex_img.jpg` would be the corresponding image file.
Thus, if `ex_img.jpg` were the only image, the entire album file would look as follows:
```
{
    "album_title": "Seifert Fiberings",
    "description": "FIX ME",
    "tags": "math algebric-topology differential-topology",

    "ex_img" : {
        "title": "example image",
        "description": "example description",
        "tags": "tag1 tag2 tag-with-multiple-words"
    }
}
```

If we had in image that in a format other than JPG, we would append the following:
```
"ex_img" : {
    "title": "example image",
    "description": "example description",
    "tags": "tag1 tag2 tag-with-multiple-words",
    "ext": "png"
}
```
This code would effectively tag an image named `ex_img.png`.

## Videos
At the moment, video files are not supported.
Thus, right now all animations must be converted to GIFs or WEBP.
We will prefer WEBP due its improved video compression.

If we want to tag a video called `ex_video.webp`, we would add


```
"ex_video" : {
    "title": "example video",
    "description": "example description",
    "tags": "tag1 tag2 tag-with-multiple-words",
    "ext": "webp"
}
```

### Converting Videos
To convert video files to WEBP, I recommend this [site](https://ffmpeg-online.vercel.app/?inputOptions=-i&output=output.webp&outputOptions=-vcodec%20webp)

If ffmpeg is installed, then one could do the same operation with the following command:
```
ffmpeg -i video.mov -vcodec webp video.webp
```



