import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "sk9wp7pf",
  dataset: "production",
  apiVersion: "2021-10-26",
  token: "skm2gni3sj6mhMng7oSmas1j9h3OPapYgRP36YPR5pF8yIuXXKnh3Xko0FdZDH5GENvZ1Q8vRL58JMIgX9UAyzaqFmjVdG38sp7A5tPPE0iD6WyPyqyUPu5oyKOKtNsAhEzPAjZfcir2TbyGBv3mWT0xy89NibDnWGgTkvVqKSlLGafFLSI4",
  useCdn: false,
  ignoreBrowserTokenWarning: true
});
export {
  client as c
};
