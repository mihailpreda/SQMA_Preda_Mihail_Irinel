# Secure Code Management Homework

Preda Mihail Irinel, ISM

### Setup jenkins

##### Steps

1. Go to https://www.jenkins.io/download/ and download Download `Jenkins 2.319.1 LTS` for your OS system
2. Open Installer

| ![Chosen Image](./steps/1next.png) |
| :--------------------------------: |
|            <b>Fig.1</b>            |

2. Choose where to install it:

| ![Chosen Image](./steps/2instrallDestination.png) |
| :-----------------------------------------------: |
|                   <b>Fig.2</b>                    |

3. Choose Logon type. Select `Run service as LocalSystem`

| ![Chosen Image](./steps/3logonType.png) |
| :-------------------------------------: |
|              <b>Fig.3</b>               |

4. Select a port number or leave it as default (8080)

| ![Chosen Image](./steps/4selectPort.png) |
| :--------------------------------------: |
|               <b>Fig.4</b>               |

5. Test the port to see if it is available:

| ![Chosen Image](./steps/5TestPort.png) |
| :------------------------------------: |
|              <b>Fig.5</b>              |

6. Select where your Java JDK is installed:

| ![Chosen Image](./steps/6SelectJDK.png) |
| :-------------------------------------: |
|              <b>Fig.6</b>               |

7. Click next and don't change `Firewall Exception`

| ![Chosen Image](./steps/7FireWallNext.png) |
| :----------------------------------------: |
|                <b>Fig.7</b>                |

8. Install it

| ![Chosen Image](./steps/8install.png) |
| :-----------------------------------: |
|             <b>Fig.8</b>              |

9. After install you need to unlock the Jenkins. Go to `http://localhost:{PORT_NUMBER}/` In my case is http://localhost:8080/

| ![Chosen Image](./steps/9activateJenkins.png) |
| :-------------------------------------------: |
|                 <b>Fig.9</b>                  |

10. You will see a window which will require from you an initial administrator passsword
    For default installation location of the password is `C:\Program Files (x86)\Jenkins\.jenkins\secrets\initialAdminPassword`,

| ![Chosen Image](./steps/10initialPassword.png) |
| :--------------------------------------------: |
|                 <b>Fig.10</b>                  |

Copy and past it into the window dialog

| ![Chosen Image](./steps/11InitialPasswordNotepad.png) |
| :---------------------------------------------------: |
|                     <b>Fig.11</b>                     |

11. After you enter the passsword you will have 2 options : `Install suggested plugins` or `Select plugins to install`

| ![Chosen Image](./steps/12gettingStarted.png) |
| :-------------------------------------------: |
|                 <b>Fig.12</b>                 |

12. After you have choosen, the plugin will start to install and you will see the progress.

| ![Chosen Image](./steps/13InstallingProgress.png) |
| :-----------------------------------------------: |
|                   <b>Fig.13</b>                   |

13. After the plugins have been installed you need to create an admin

| ![Chosen Image](./steps/14CreateAdmin.png) |
| :----------------------------------------: |
|               <b>Fig.14</b>                |

14. Set the URL address and press `Save and Finish`

| ![Chosen Image](./steps/15InstanceConfiguration.png) |
| :--------------------------------------------------: |
|                    <b>Fig.15</b>                     |

15. Now Jenkins is ready

| ![Chosen Image](./steps/16JenkinsIsReady.png) |
| :-------------------------------------------: |
|                 <b>Fig.16</b>                 |

---

### Homework 1

##### Steps

1. Go to https://github.com/ and login into your account
2. Create a new repository. Click on `new`

| ![Chosen Image](./steps/17CreateRepo.png) |
| :---------------------------------------: |
|               <b>Fig.1</b>                |

3. Choose a name and leave it as public. Press `Create Repository`

| ![Chosen Image](./steps/18RepoSettings.png) |
| :-----------------------------------------: |
|                <b>Fig.2</b>                 |

4. Set the origin to your repo

| ![Chosen Image](./steps/19SetOrigin.png) |
| :--------------------------------------: |
|               <b>Fig.3</b>               |

5. Add a new Job :

| ![Chosen Image](./steps/20AddANewJob.png) |
| :---------------------------------------: |
|               <b>Fig.4</b>                |

6. Enter Job Name

| ![Chosen Image](./steps/21EnterJobName.png) |
| :-----------------------------------------: |
|                <b>Fig.5</b>                 |

7. Enter a description. Go to `Source Code Management`, check `Git`, put the link to the repository and click `Save`

| ![Chosen Image](./steps/22ConfigureJob1.png) |
| :------------------------------------------: |
|                 <b>Fig.6</b>                 |

8. If everyting is okey you will seein the workspace that the Jenkins successfully downloaded the files from Github.

| ![Chosen Image](./steps/23filesDownloadedSuccessfull.png) |
| :-------------------------------------------------------: |
|                       <b>Fig.7</b>                        |

9. Then go to `Configure`

| ![Chosen Image](./steps/24GoToConfigure.png) |
| :------------------------------------------: |
|                 <b>Fig.8</b>                 |

10. Go to `General` and tick `This project is parameterized`. After that you put the parameters that you have.
    In my case I have 2 test suits, each one is run by specifying `npm run testA` or `npm run testB`

| ![Chosen Image](./steps/25Parametrized.png) |
| :-----------------------------------------: |
|                <b>Fig.9</b>                 |

11. Then go to `Build`, add a` Windows batch command` and add the following line `npm install && npm run %whichTest%`

| ![Chosen Image](./steps/26WindowsBatch.png) |
| :-----------------------------------------: |
|                <b>Fig.10</b>                |

12. Click on `Build with parameters`

| ![Chosen Image](./steps/27BuildWithParameters.png) |
| :------------------------------------------------: |
|                   <b>Fig.11</b>                    |

13. Choose `testA`, then press `Build`.

| ![Chosen Image](./steps/28BuildTestA.png) |
| :---------------------------------------: |
|               <b>Fig.12</b>               |

14. Click on the latest done build, go to `Console Output` and see the results :

| ![Chosen Image](./steps/28BuildTestAConsoleOutput.png) |
| :----------------------------------------------------: |
|                     <b>Fig.13</b>                      |

15. Click on `Build with parameters`

| ![Chosen Image](./steps/27BuildWithParameters.png) |
| :------------------------------------------------: |
|                   <b>Fig.14</b>                    |

16. Choose `testB`, then press `Build`.

| ![Chosen Image](./steps/28BuildTestB.png) |
| :---------------------------------------: |
|               <b>Fig.15</b>               |

17. Click on the latest done build, go to `Console Output` and see the results :

| ![Chosen Image](./steps/28BuildTestBConsoleOutput.png) |
| :----------------------------------------------------: |
|                     <b>Fig.16</b>                      |

---

### Homework 2

##### Steps

1. From `Dashboard`, click on `New Item`

| ![Chosen Image](./steps/29newItem.png) |
| :------------------------------------: |
|              <b>Fig.1</b>              |

2. Enter a name for the item, select `Pipeline` and press `OK`

| ![Chosen Image](./steps/30pipelineName.png) |
| :-----------------------------------------: |
|                <b>Fig.2</b>                 |

3. Add a description

| ![Chosen Image](./steps/31pipelineDescription.png) |
| :------------------------------------------------: |
|                    <b>Fig.3</b>                    |

4. Scroll down to `Pipeline` and Add a `Pipeline script`. To do this click on `Pipeline Syntax`

| ![Chosen Image](./steps/32pipelineScript.png) |
| :-------------------------------------------: |
|                 <b>Fig.4</b>                  |

5. Now, select `Snippet Generator` from the left handside, then in the main page at `Sample step` select `build: Build a job`.
   After that, write the project to be build. Select with what parameter do you want the job and then click on `Generate Pipeline Script`

| ![Chosen Image](./steps/33PipelineSnippetGeneratorTestA.png) |
| :----------------------------------------------------------: |
|                         <b>Fig.5</b>                         |

| ![Chosen Image](./steps/34PipelineSnippetGeneratorTestB.png) |
| :----------------------------------------------------------: |
|                         <b>Fig.6</b>                         |

6. Copy the generated codes into the `Pipeline Script` and press `Save`.

| ![Chosen Image](./steps/35PipelineScriptSaved.png) |
| :------------------------------------------------: |
|                    <b>Fig.7</b>                    |

7. From left handside menu click on `Build Now`

| ![Chosen Image](./steps/36RunPipeline.png) |
| :----------------------------------------: |
|                <b>Fig.8</b>                |

8. To see Pipeline result click on latest done build

| ![Chosen Image](./steps/37SeePipelineResult.png) |
| :----------------------------------------------: |
|                   <b>Fig.9</b>                   |

9. Then click on `Console Output` to see the build

| ![Chosen Image](./steps/38PipelineConsoleOutput.png) |
| :--------------------------------------------------: |
|                    <b>Fig.10</b>                     |

---

## Project setup

```
npm install
```

## Project run

```
npm start
```

## Project test

```
npm test
```

## Project individual test suites

```
npm run testA
npm run testB
```
