//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here

async function fetchFileContent(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log(`Content of ${file}: ${text}`);
    } catch (error) {
        console.error(`Failed to fetch ${file}: ${error.message}`);
    }
}


fileNames.forEach((file)=>{
	fetchFileContent(file);
})