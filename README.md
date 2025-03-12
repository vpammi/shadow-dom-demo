# Shadow DOM Demo – Salesforce Lightning Web Components

## Overview

The **Shadow DOM Demo** project is a sample Salesforce DX project that demonstrates how different rendering modes work in Lightning Web Components (LWC). In this demo you will find examples of:

- **Native Shadow DOM** – Components that use the browser’s native shadow DOM.
- **Synthetic Shadow** – Components that use Salesforce’s synthetic shadow DOM.
- **Light DOM** – Components that render in the global document and allow global styles to affect them.

This project is intended as a learning tool for beginners who want to understand the differences between these modes and see them in action within the Salesforce platform.

## Prerequisites

Before setting up the project, ensure you have the following:

- **Salesforce CLI (sf)** – Download and install the latest [Salesforce CLI](https://developer.salesforce.com/tools/sfcli) that replaces the older sfdx commands.
- **Salesforce DX Project (Scratch Org) or a Developer Edition** – This project is built for Salesforce DX. If you don’t have a Developer Edition, you can create a Scratch Org.
- **Node.js and npm** – Required to run Jest unit tests and manage project dependencies.
- **Basic knowledge of JavaScript and Salesforce development** – Familiarity with LWC and the Salesforce development environment will be helpful.

## Project Structure

- **force-app/**
  Contains the main source code for your Salesforce project. Key folders include:

  - **main/default/lwc/**
    All your Lightning Web Components reside here (e.g. native shadow, synthetic shadow, and light DOM components).
  - **staticresources/**
    Contains global styles or scripts deployed as static resources.
  - Other folders (permissionsets, flexipages, applications, etc.) contain additional metadata needed to deploy the demo to your Salesforce instance.

- **config/**
  Contains configuration files such as `project-scratch-def.json` that define your Scratch Org settings.

- **package.json & package-lock.json**
  Manage project dependencies and scripts (for example, running LWC Jest tests).

- **scripts/**
  Contains additional utility scripts (if any).

## Setting Up in a Salesforce Instance Using the SF CLI

The following steps show how to set up and deploy the demo using the new SF CLI commands:

### 1. Authenticate with Your Salesforce Org

If you’re using a Developer Edition or a sandbox, log in using:

```bash
sf login org --alias YourOrgAlias
```

This command opens a browser window where you can log in to your Salesforce account. The `--alias` flag assigns a short name to your org.

### 2. Create a Scratch Org

For Salesforce DX projects, create a scratch org using your project configuration file:

```bash
sf org create scratch -f config/project-scratch-def.json --alias ShadowDemoOrg --set-default
```

Here:

- `-f config/project-scratch-def.json` specifies your Scratch Org definition file.
- `--alias ShadowDemoOrg` assigns a name to your scratch org.
- `--set-default` marks it as your default org for subsequent commands.

### 3. Deploy the Source to Your Org

Deploy your source code with:

```bash
sf project deploy start
```

This command pushes all your local project source (including LWCs and metadata) into your scratch org.

### 4. Assign the Permission Set

To view the demo, **assign the permission set** named **Shadow DOM Demo** to your user. You can do this through the Salesforce Setup interface:

1. In your scratch org, go to **Setup**.
2. Navigate to **Permission Sets**.
3. Locate and open the **Shadow DOM Demo** permission set.
4. Click **Manage Assignments** and add your user.

Alternatively, if you prefer using the CLI, you may use (if available in your version):

```bash
sf user permset assign --permset "Shadow_DOM_Demo"
```

_(Note: If the above SF CLI command is not available, you can still use the legacy sfdx command or assign via the Setup UI.)_

### 5. Open Your Org

Finally, launch your org in the browser to see the demo in action:

```bash
sf org open
```

This command opens your default Salesforce org in your web browser. Once inside, navigate to the app or page where your Lightning Web Components are displayed.

## Additional Resources

For further reading and support, check out these resources:

- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/create-dom.html)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

## Conclusion

This demo project helps you understand and experiment with different DOM rendering modes (native shadow, synthetic shadow, and light DOM) in Lightning Web Components. Follow the updated steps above to set up your Salesforce instance using the new SF CLI and be sure to assign the **Shadow DOM Demo** permission set so you can fully experience the demo.

Happy coding!
