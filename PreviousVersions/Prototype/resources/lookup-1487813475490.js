(function(window, undefined) {
  var dictionary = {
    "d5220b03-9f3d-4e8c-9cea-258f33009098": "Chapter1Section5",
    "4e84b3dc-7a4d-4e02-99c1-cf3cf46cc2fb": "Chapter1Section4",
    "9b13f742-6efb-4ca8-a83f-6f8162d6a9eb": "Chapter1Section3",
    "62360b22-07e9-4337-9869-5520db856146": "Chapter1Section2",
    "01df0436-a7c9-4a44-8073-e91146d7634e": "Chapter1Section1",
    "5b28066d-e72f-4af1-9384-b283273026b8": "Chapter1",
    "51c3a256-8dfb-49e3-8339-76dd8b0f353f": "Home",
    "358c13fa-5bb4-42f0-87cd-8afe30260173": "Chapter1Quiz",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "31aef4f9-0ee6-4c3c-b408-827647dfe766": "sitetemplate",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);