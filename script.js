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

const fetchFiles = async()=>{

	try {
		const resp = await fetch(file);
		const data - await resp.text();

		console.log(data);
	} catch (error) {

		console.log(error);
	}
	
}

fileNames.forEach((file)=>{
	fetchFiles(file);
})
