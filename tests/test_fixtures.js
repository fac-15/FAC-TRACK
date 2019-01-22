const text_fixtures = {
  users: [
    {
      id: 1,
      usernames: "sheila",
      password: "NZY3x6rTH9",
      loggedin: false
    },
    {
      id: 2,
      usernames: "dave",
      password: "jL5GJYhk",
      loggedin: true
    },
    {
      id: 3,
      usernames: "francis",
      password: "tDAfsea6e",
      loggedin: false
    },
    {
      id: 4,
      usernames: "charlotte",
      password: "ekuf3yCnH",
      loggedin: false
    },
    {
      id: 5,
      usernames: "audrey",
      password: "2GXz5hSu8vi",
      loggedin: false
    },
    {
      id: 6,
      usernames: "craig",
      password: "mFr8RDB",
      loggedin: false
    },
    {
      id: 7,
      usernames: "erica",
      password: "qHAdA8Pd",
      loggedin: true
    },
    {
      id: 8,
      usernames: "bill",
      password: "yJHohLkjTr",
      loggedin: true
    }
  ],
  tasks: [
    {
      id: 1,
      name: "Transcof",
      weekid: 2
    },
    {
      id: 2,
      name: "Voltsillam",
      weekid: 8
    },
    {
      id: 3,
      name: "It",
      weekid: 2
    },
    {
      id: 4,
      name: "Zoolab",
      weekid: 3
    },
    {
      id: 5,
      name: "Konklab",
      weekid: 8
    },
    {
      id: 6,
      name: "Cardguard",
      weekid: 1
    },
    {
      id: 7,
      name: "Zaam-Dox",
      weekid: 7
    },
    {
      id: 8,
      name: "Duobam",
      weekid: 6
    }
  ],
  weeks: [
    {
      id: 1,
      name: "toolkit"
    },
    {
      id: 2,
      name: "testing"
    },
    {
      id: 3,
      name: "API"
    },
    {
      id: 4,
      name: "node core"
    }
  ],
  logs: [
    {
      id: 1,
      completion: false,
      confidence: 1,
      notes: "Ω≈ç√∫˜µ≤≥÷",
      task_id: 1,
      user_id: 4
    },
    {
      id: 2,
      completion: false,
      confidence: 2,
      notes: "/dev/null; touch /tmp/blns.fail ; echo",
      task_id: 2,
      user_id: 4
    },
    {
      id: 3,
      completion: false,
      confidence: 1,
      notes: "　",
      task_id: 2,
      user_id: 6
    },
    {
      id: 4,
      completion: true,
      confidence: 3,
      notes:
        "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
      task_id: 1,
      user_id: 2
    },
    {
      id: 5,
      completion: false,
      confidence: 2,
      notes: "<img src=x onerror=alert('hi') />",
      task_id: 5,
      user_id: 7
    }
  ]
};

module.exports = text_fixtures;
