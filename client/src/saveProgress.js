import axios from "axios";

const databaseId = "a64730ef2af748c5ab4f92908b92b70b";

const serverURL = {
  dev: "http://localhost:3000",
  prod: "https://89.108.77.14",
};

const baseURL = serverURL.dev;

const findPage = async (courseName) => {
  const { data } = await axios.post(`${baseURL}/dbs/${databaseId}/query`, {
    filter: {
      property: "Name",
      title: {
        contains: courseName,
      },
    },
  });

  return data.results;
};

const createPage = async (courseName) => {
  const { data } = await axios.post(`${baseURL}/pages`, {
    parent: { database_id: databaseId },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: courseName,
            },
          },
        ],
      },
    },
  });

  return data;
};

const updateProgress = async (pageId, progress) => {
  return axios.patch(`${baseURL}/pages/${pageId}`, {
    properties: {
      Progress: {
        number: progress,
      },
    },
  });
};

const saveProgress = async (progress, courseName) => {
  const results = await findPage(courseName);
  let pageId = results.length > 0 ? results[0].id : null;
  if (!pageId) {
    const newPage = await createPage(courseName);
    pageId = newPage.id;
  }

  updateProgress(pageId, progress);
};

export { saveProgress };
